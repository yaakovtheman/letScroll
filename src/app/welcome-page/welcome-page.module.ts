import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WelcomePageComponent],
  exports:[WelcomePageComponent]
})
export class WelcomePageModule { }
