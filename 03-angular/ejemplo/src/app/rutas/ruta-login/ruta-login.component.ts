import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuario = [
    {
      id: "A1",
      nombre: 'Diana',
      color: '#00BCFF',
      link: 'https://www.google.com/',
      linkImagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/09/29/16328664982054.jpg'
    },
    {
      id: "A2",
      nombre: "Mahatma",
      color: '#a33349',
      link: 'https://www.facebook.com',
      linkImagen: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/12/minecraft.jpg?fit=2048%2C1350&ssl=1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}
