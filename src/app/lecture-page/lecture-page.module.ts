import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturePageComponent } from './lecture-page.component';
import {BookWindowComponent} from "./components/book-window/book-window.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LecturePageComponent, BookWindowComponent],
  exports: [LecturePageComponent]
})
export class LecturePageModule { }
