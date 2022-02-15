import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoresComponent} from "./Rutas/Negocio/stores/stores.component";
import {CreateStoreComponent} from "./Rutas/Negocio/create-store/create-store.component";
import {UpdateStoreComponent} from "./Rutas/Negocio/update-store/update-store.component";
import {ClothingComponent} from "./Rutas/Ropa/clothing/clothing.component";
import {CreateClothingComponent} from "./Rutas/Ropa/create-clothing/create-clothing.component";
import {UpdateClothingComponent} from "./Rutas/Ropa/update-clothing/update-clothing.component";

const routes: Routes = [
  {
    path: 'stores',
    component: StoresComponent,
  },
  {
    path: 'stores/createStore',
    component: CreateStoreComponent
  },
  {
    path: 'stores/updateStore/:codeStore',
    component: UpdateStoreComponent
  },
  {
    path: 'stores/:codeStore/clothing',
    component: ClothingComponent
  },
  {
    path: 'stores/:codeStore/clothing/createClothing',
    component: CreateClothingComponent
  },
  {
    path: 'stores/:codeStore/clothing/updateClothing/:codeClothing',
    component: UpdateClothingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
