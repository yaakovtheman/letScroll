import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule
  ],
  declarations: [CreatePageComponent],
  exports:[CreatePageComponent]
})
export class CreatePageModule { }
