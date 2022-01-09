import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaPrincipalComponent } from './rutas/ruta-principal/ruta-principal.component';
import {HeaderPageModule} from "./componentes/header-page/header-page.module";
import {FooterPageModule} from "./componentes/footer-page/footer-page.module";
import {BoxPostModule} from "./componentes/box-post/box-post.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RutaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderPageModule,
    FooterPageModule,
    BoxPostModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
