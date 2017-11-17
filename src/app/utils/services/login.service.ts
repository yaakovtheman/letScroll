import { Injectable } from '@angular/core';
import {ServerConnector} from "./server-connector.service";
import {AppCacheService} from "./app-cache.service";
import {Router} from '@angular/router';
import {BehaviorSubject} from "rxjs";



@Injectable()
export class JoinService {
  serverPath = "http://192.168.43.27:8080";
  navItemSource = new BehaviorSubject<boolean>(false);

  constructor(private serverConnector: ServerConnector,private cache : AppCacheService) {}


  joinLecture(id : number,name:string){
    let path = this.serverPath + "/api/class/join?id=" + id + "&name=" + name;
      this.serverConnector.getData(path).subscribe((data)=>{
        this.cache.currentLecture = data;
        this.navItemSource.next(true);
      })
  }

  createLecture(info: any){
    let path = this.serverPath + '/api/class/create';
      this.serverConnector.postData(path, info).subscribe((data)=>{
        console.log(data);
        this.cache.currentLecture = data;
        this.navItemSource.next(true);
      })
  }

}
