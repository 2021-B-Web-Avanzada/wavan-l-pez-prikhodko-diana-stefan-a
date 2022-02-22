import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresComponent } from './Rutas/Negocio/stores/stores.component';
import { UpdateStoreComponent } from './Rutas/Negocio/update-store/update-store.component';
import { CreateStoreComponent } from './Rutas/Negocio/create-store/create-store.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateClothingComponent } from './Rutas/Ropa/create-clothing/create-clothing.component';
import { ClothingComponent } from './Rutas/Ropa/clothing/clothing.component';
import { UpdateClothingComponent } from './Rutas/Ropa/update-clothing/update-clothing.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    UpdateStoreComponent,
    CreateStoreComponent,
    CreateClothingComponent,
    ClothingComponent,
    UpdateClothingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
