import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {AuthService} from "./servicios/auth/auth.service";
import {EstaLogeadoGuard} from "./servicios/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalEjemploComponent } from './componentes/modales/modal-ejemplo/modal-ejemplo.component';
import {SocketIoModule} from "ngx-socket-io";
import { RutaSalaComponent } from './rutas/ruta-sala/ruta-sala.component';


@NgModule({
  //Componentes importados
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent,
    RutaUsuarioPerfilComponent,
    ModalEjemploComponent,
    RutaSalaComponent
  ],
  //Módulos importados
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    HttpClientModule,
    FormsModule, // Template Driven Forms
    ReactiveFormsModule,
    InputSwitchModule,
    KnobModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    SocketIoModule.forRoot({
      url: 'ws://localhost:8080',

      options: {}
    })
  ],
  //Servicios importados
  providers: [
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  //Módulo principal
  bootstrap: [AppComponent]
})
export class AppModule { }
