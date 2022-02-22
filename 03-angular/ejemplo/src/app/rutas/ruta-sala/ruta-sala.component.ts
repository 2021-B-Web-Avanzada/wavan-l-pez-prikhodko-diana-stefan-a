import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketService} from "../../servicios/websockets/websocket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit, OnDestroy {

  //Variables a usar
  nombreSala = "";
  salaID = "";
  arregloSuscripciones: Subscription[] = [];
  mensaje = "";
  arregloMensajes: {
    salaId: number,
    nombre: string,
    mensaje: string,
    posicion: 'izq' | 'der' ;
  } [] = [];

  constructor(
    public readonly activatedRoute:ActivatedRoute,
    public readonly websocketService:WebsocketService
  ) {
    console.log("Constructor")
  }

  enviarMensaje(){
    this.arregloMensajes.push({
      mensaje:this.mensaje,
      salaId: +this.salaID,
      nombre: this.nombreSala,
      posicion: 'izq'
    })
    this.websocketService.ejecutarEventoEnviarMensaje(
      +this.salaID, this.nombreSala, this.mensaje
    );
    this.mensaje = '';
  }

  ngOnInit(): void {
    this.activatedRoute
      .params
      .subscribe({
        next: (parametrosDeRuta) => {
          const salaId = parametrosDeRuta["salaId"];
          const nombre = parametrosDeRuta["nombre"];
          this.salaID = salaId;
          this.nombreSala = nombre;
          this.logicaSala(this.salaID, this.nombreSala);
        }
      })
  }

  logicaSala(salaId : string , nombre : string){
    this.desSuscribirse();
    const respuestaEscucharEventoMensaje = this.websocketService
        .escucharEventoMensajeSala()
        .subscribe({
          next: (data : any) => {
            console.log('Enviaron Mensaje', data);
            this.arregloMensajes.push({
              mensaje:data.mensaje,
              salaId: data.salaId,
              nombre: data.nombre,
              posicion: data.nombre === this.nombreSala ? 'izq' : 'der'
            })
          },
          error: (error) => {
            console.log({error})
          }
        });
    const respuestaEscucharEventoUnirseSala = this.websocketService
      .escucharEventoUnirseSala()
      .subscribe({
        next: (data) => {
          console.log('Alguien entro', data);
        },
        error: (error) => {
          console.log({error})
        }
      });
    this.arregloSuscripciones.push(respuestaEscucharEventoMensaje);
    this.arregloSuscripciones.push(respuestaEscucharEventoUnirseSala);
    this.websocketService.ejecutarEventoUnirseSala(+this.salaID, this.nombreSala);
  }

  desSuscribirse(){
    this.arregloSuscripciones.forEach(
      (suscripcion) =>{
        suscripcion.unsubscribe();
      }
    );
    this.arregloSuscripciones = [];
  }

  ngOnDestroy(): void {
    console.log("Destroy")
  }

}
