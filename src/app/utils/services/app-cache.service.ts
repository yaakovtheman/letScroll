import { Injectable } from '@angular/core';
import {BookHeader} from "../classes/BookHeader";
import {Lecture} from "../classes/Lecture";

@Injectable()
export class AppCacheService {

  bookHeaders : BookHeader[];
  currentLecture : Lecture;

  constructor() { }

}
