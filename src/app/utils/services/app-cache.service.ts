import { Injectable } from '@angular/core';
import {BookHeader} from "../classes/BookHeader";

@Injectable()
export class AppCacheService {

  bookHeaders : BookHeader[];

  constructor() { }

}
