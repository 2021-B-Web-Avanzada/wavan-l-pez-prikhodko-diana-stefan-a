import {Injectable} from "@angular/core";
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor(private socket: Socket) {
  }
  ejecutarEventHola() {
    const resp = this.socket.emit('hola', {
      nombre: 'Diana'
    })
    console.log(resp)
  }
  escucharEventoHola(){
    return this.socket
      .fromEvent('escucharEventoHola');
  }
  //Evento Unirse a Sala
  ejecutarEventoUnirseSala(salaId: number, nombre: string){
    this.socket.emit(
      'unirseSala',{
        nombre,
        salaId
      }
    );
  }
  escucharEventoUnirseSala(){
    return this.socket.fromEvent('escucharEventoUnirseSala')
  }
//Evento Enviar mensaje
  ejecutarEventoEnviarMensaje(salaId: number, nombre: string, mensaje: string){
    this.socket.emit(
      'enviarMensaje',{
        nombre,
        salaId,
        mensaje
      }
    );
  }

  escucharEventoMensajeSala(){
    return this.socket.fromEvent('escucharEventoMensajeSala')
  }
}





