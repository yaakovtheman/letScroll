import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherPageComponent} from "./teacher-page.component";
import {TeacherBookWindowComponent} from "./components/teacher-book-window/teacher-book-window.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeacherPageComponent, TeacherBookWindowComponent],
  exports: [TeacherPageComponent]
})
export class TeacherPageModule { }
