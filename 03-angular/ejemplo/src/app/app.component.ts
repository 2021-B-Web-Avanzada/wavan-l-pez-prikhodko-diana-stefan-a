import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./servicios/websockets/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{


  constructor(
    private readonly websocketService: WebsocketService
  ) {
  }

  eventoHola(){
    this.websocketService.ejecutarEventHola();
  }

  ngOnInit() {
    this.websocketService
      .escucharEventoHola()
      .subscribe({
        next: (data) =>{
          console.log(data);
        },
        error: (error) =>{
          console.error({error})
        }
      })
  }

}

