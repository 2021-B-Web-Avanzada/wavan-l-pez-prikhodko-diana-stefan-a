import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit {

  optionFooter = [
    {
      titulo: "Solución",
      opciones: ["Ofertas","Opiniones","Plantillas","Funciones",""]
    },
    {
      titulo: "Recursos",
      opciones: ["Blog","Centro de ayuda","Comunidad de expertos","FAQ",""]
    },
    {
      titulo: "Compañía",
      opciones: ["Nuestro universo","Compromisos","Noticias","Prensa","Contáctanos"]
    },
    {
      titulo: "Enlaces útiles",
      opciones: ["Nuestros socios","Hacerse socio(a)","Hacerse experto(a)","Hacerse afiliado(a)",""]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
