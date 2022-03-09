import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Rutas/inicio/inicio.component';
import { JuegoComponent } from './Rutas/juego/juego.component';
import { SalaEsperaComponent } from './Rutas/sala-espera/sala-espera.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    JuegoComponent,
    SalaEsperaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
