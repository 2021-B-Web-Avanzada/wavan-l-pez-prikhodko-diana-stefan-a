import { Component } from '@angular/core';
import {WebsocketService} from "./servicios/websockets/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejemplo';

  constructor(
    private readonly websocketService: WebsocketService
  ) {
  }

  eventoHola(){
    this.websocketService.ejecutarEventHola()
  }

}

