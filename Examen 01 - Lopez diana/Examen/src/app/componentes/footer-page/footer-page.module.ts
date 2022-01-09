import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPageComponent } from './footer-page/footer-page.component';
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    FooterPageComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    FooterPageComponent
  ]
})
export class FooterPageModule { }
