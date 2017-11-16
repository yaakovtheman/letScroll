import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {JoinService} from "../utils/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  subscription:Subscription;

  constructor(private  join : JoinService,private  router : Router) { }

  joinClass(id : number, name : string){
    this.join.joinLecture(id,name);
  }
  ngOnInit() {
    this.subscription = this.join.navItemSource
      .subscribe((isLec) => {
      if(isLec){
        this.goToLectureUrl();
      }
      })
  }
  goToLectureUrl(){
    this.router.navigateByUrl('/lecture');
  }

}
