import { Component, OnInit } from '@angular/core';
import {WebsocketsService} from "../../Servicios/websockets.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  constructor(
    private readonly websocketsService:WebsocketsService,
    private readonly formBuilder:FormBuilder,
    private readonly router:Router,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  //Variables globales
  listaSuscripcion: Subscription[] = []
  listaPalabras: string[] = []
  jugadorActual: string = ""
  jugadorTurno: string = ""
  formGroup?: FormGroup
  palabraActual = ""
  salaActual: string = ""
  ultimaPalabra: string = ""

  //Preparar Formulario
  prepararFormulario(){
    this.formGroup = this.formBuilder.group({
      palabra: new FormControl({
        value: '',
        disabled: false,
      })
    })
  }

  //Comprobar la palabra en el arreglo
  comprobarNuevaPalabra(){
    this.palabraActual = this.formGroup?.get('palabra')?.value;
    if (this.palabraActual){
      const respuestaBusqueda = this.listaPalabras.includes(this.palabraActual)
      console.log("respuesta filter", respuestaBusqueda)
      if (respuestaBusqueda){
        alert("La palabra ya fue usada en el juego")
      } else {
        const dosUltimasLetras = this.ultimaPalabra.substr(this.ultimaPalabra.length-2, 2);
        const dosPrimerasLetras = this.palabraActual.substr(0,2);
        if(dosUltimasLetras.toUpperCase() === dosPrimerasLetras.toUpperCase()){
          this.websocketsService.ejecutarEventoNuevaPalabra(this.palabraActual, this.salaActual);
          this.formGroup!.reset()
        }else{
          alert("No coincide las letras finales con las iniciales de su palabra")
        }
      }
    }
  }

  respuestaNuevaPalabra(){
    const suscripcion = this.websocketsService.escucharRespuestaPalabraNueva()
      .subscribe({
        next: (datos: any) =>{
          console.log(datos.mensaje);
          alert(datos.mensaje +" "+  datos.turno)
          this.jugadorTurno = datos.turno;
          this.getListaPalabrasUsada()
        }
      })
    this.listaSuscripcion.push(suscripcion)
  }

  getListaPalabrasUsada(){
    this.websocketsService.ejecutarEventoEscucharPalabras(this.salaActual)
  }

  respuestaListaPalabras(){
    const suscripcion = this.websocketsService.escucharRespuestaListaPalabras()
      .subscribe({
        next: (datos: any) =>{
          console.log('palabras',datos.listaPalabras);
          this.listaPalabras = datos.listaPalabras
          this.ultimaPalabra = this.listaPalabras[this.listaPalabras.length-1];
          this.jugadorTurno = datos.turno;
        }
      })
    this.listaSuscripcion.push(suscripcion)
  }

  respuestaSalirSala(){
    const suscripcion = this.websocketsService.escucharRespuestaSalirJuego()
      .subscribe({
        next: (datos: any) =>{
          alert(datos.message)
          this.jugadorTurno = datos.turno;
        }
      })
    this.listaSuscripcion.push(suscripcion)
  }

  desuscribirse(){
    this.listaSuscripcion.forEach(
      (suscripcion) =>{
        suscripcion.unsubscribe()
      }
    )
    this.listaSuscripcion = []
  }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          this.salaActual =  parametrosRuta['salaId'];
          this.jugadorActual = parametrosRuta['apodo']
        }
      });
    console.log(this.salaActual,this.jugadorActual)
    this.prepararFormulario()
    this.getListaPalabrasUsada()
    this.respuestaNuevaPalabra()
    this.respuestaListaPalabras()
    this.respuestaSalirSala()
  }

  salirJuego(){
    this.websocketsService.ejecutarEventoSalirJuego(this.salaActual, this.jugadorActual);

    this.router.navigate(['/inicio']);
    this.desuscribirse()
  }
}
