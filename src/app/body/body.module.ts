import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyPageComponent } from './body-page/body-page.component';



@NgModule({
  declarations: [
    BodyPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyPageComponent
  ]
})
export class BodyModule { }
