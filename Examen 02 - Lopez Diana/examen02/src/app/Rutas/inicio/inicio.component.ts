import {Component, OnInit} from '@angular/core';
import {WebsocketsService} from "../../Servicios/websockets.service";
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  constructor(
    private readonly websocketsService:WebsocketsService,
    private readonly formBuilder:FormBuilder,
    private readonly router:Router
  ) { }

  //Datos globales

  listaSuscripcion: Subscription[] = []
  formGroup?: FormGroup

  //Preparar el formulario reactivo

  prepararFormulario(){
    this.formGroup = this.formBuilder.group({
      apodo: new FormControl({
        value: '',
        disabled: false,
      }),
      salaId: new FormControl({
        value: '',
        disabled: false,
      }),
    })
  }

  //Métodos que permite moverse a la sala

  unirseSala(){
    if (this.formGroup){
      this.websocketsService.ejecutarEventoUnirseSala(this.formGroup.get('apodo')?.value, this.formGroup.get('salaId')?.value);
    }
  }

  respuesta(){
    const suscripcion = this.websocketsService.escucharRespuestaServidor()
      .subscribe({
        next: (datos: any) =>{
          console.log(datos.mensaje);
          this.router.navigate(['/juego',this.formGroup?.get('salaId')?.value, this.formGroup?.get('apodo')?.value])
        }
      })
      this.listaSuscripcion.push(suscripcion)
  }

  //El servidor desde el inicio prepara el formulario y esta escuchando al servidor

  ngOnInit(): void {
    this.prepararFormulario()
    this.respuesta()
  }

}
