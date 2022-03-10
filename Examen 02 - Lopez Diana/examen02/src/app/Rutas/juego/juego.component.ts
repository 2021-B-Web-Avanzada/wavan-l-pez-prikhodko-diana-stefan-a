import { Component, OnInit } from '@angular/core';
import {WebsocketsService} from "../../Servicios/websockets.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  constructor(
    private readonly websocketsService:WebsocketsService,
    private readonly formBuilder:FormBuilder,
    private readonly router:Router
  ) { }

  //Variables globales
  listaPalabras = []
  jugadorActual: string = ""
  formGroup?: FormGroup

  //Preparar Formulario
  prepararFormulario(){
    this.formGroup = this.formBuilder.group({
      palabra: new FormControl({
        value: '',
        disabled: false,
      })
    })
  }

  //Comprobar la palabra en la RAE
  comprobarNuevaPalabra(){

  }


  ngOnInit(): void {
    this.prepararFormulario()
  }

}
