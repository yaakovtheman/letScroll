import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherPageComponent} from "./teacher-page.component";
import {TeacherBookWindowComponent} from "./components/teacher-book-window/teacher-book-window.component";
import { ScrollSpyModule } from 'ng2-scrollspy';

@NgModule({
  imports: [
    CommonModule,
    ScrollSpyModule.forRoot()
  ],
  declarations: [TeacherPageComponent, TeacherBookWindowComponent],
  exports: [TeacherPageComponent]
})
export class TeacherPageModule { }
