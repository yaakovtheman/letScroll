import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreatePageComponent],
  exports:[CreatePageComponent]
})
export class CreatePageModule { }
