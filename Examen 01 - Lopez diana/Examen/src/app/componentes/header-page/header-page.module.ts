import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page/header-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    HeaderPageComponent
  ]
})
export class HeaderPageModule { }
