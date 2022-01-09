import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaPrincipalComponent} from "./rutas/ruta-principal/ruta-principal.component";

const routes: Routes = [
  {
    path: 'Modulos-Pro',
    component: RutaPrincipalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
