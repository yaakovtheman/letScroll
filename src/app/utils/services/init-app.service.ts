import { Injectable } from '@angular/core';
import {ServerConnector} from "./server-connector.service";
import {AppCacheService} from "./app-cache.service";

@Injectable()
export class InitAppService {
  serverUrl : string = "http://192.168.43.27:8080/api/list"

  constructor(private serverConnector: ServerConnector,private cache : AppCacheService) {
    this.initApp()
  }
  initApp(){
    console.log("*********letScroll starting*********")
    this.serverConnector.getData(this.serverUrl).subscribe((data)=>{
      this.cache.bookHeaders = data;
      console.log(this.cache.bookHeaders);
    })
  }
}
