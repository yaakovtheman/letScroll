import { Injectable } from '@angular/core';
import {ServerConnector} from "./server-connector.service";
import {AppCacheService} from "./app-cache.service";

@Injectable()
export class InitAppService {

  constructor(private serverConnector: ServerConnector,private cache : AppCacheService) {
    this.initApp()
  }
  initApp(){
    console.log("*********letScroll starting*********")
    this.serverConnector.getData("http://localhost:8080/api/list").subscribe((data)=>{
      this.cache.bookHeaders = data;
      console.log(this.cache.bookHeaders);
    })
  }
}
