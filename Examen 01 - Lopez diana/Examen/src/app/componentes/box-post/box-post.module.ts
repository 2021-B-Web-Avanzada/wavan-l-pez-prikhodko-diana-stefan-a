import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxPostComponent } from './box-post/box-post.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    BoxPostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  exports: [
    BoxPostComponent
  ]
})
export class BoxPostModule { }
