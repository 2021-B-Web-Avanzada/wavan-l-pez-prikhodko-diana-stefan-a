import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./Rutas/inicio/inicio.component";
import {JuegoComponent} from "./Rutas/juego/juego.component";
import {SalaEsperaComponent} from "./Rutas/sala-espera/sala-espera.component";

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'juego/:salaId/:nombreUsuario',
    component: JuegoComponent
  },
  {
    path: 'salaEspera/:salaId/:nombreUsuario',
    component: SalaEsperaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
