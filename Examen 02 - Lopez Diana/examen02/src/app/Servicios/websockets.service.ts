import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {

  constructor(private socket: Socket) { }

  ejecutarEventoUnirseSala(apodo: string, salaId: string) : Observable<any>{
    return this.socket.emit('unirseSala', {
      apodo: apodo, salaId: salaId
    })
  }

  escucharRespuestaServidor(){
    return this.socket.fromEvent('RespuestaUnirseSala')
  }
}
