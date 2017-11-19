import { Component, OnInit } from '@angular/core';
import {ServerConnector} from "../utils/services/server-connector.service";
import {BookLine} from "../utils/classes/BookLine";
import {AppCacheService} from "../utils/services/app-cache.service";

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css']
})
export class LecturePageComponent implements OnInit {

  constructor(private serverConnector: ServerConnector,private  appCacheService:AppCacheService){
    this.getListFromServer();
  }
  bookTextArray : string[][];
  text: BookLine[];
  index: number = 0;
  lines : BookLine[]= [];

  getListFromServer(){
      this.bookTextArray = this.appCacheService.currentLecture.bookContent;
      this.nextPage();
  }
  nextPage():void{
    this.lines.length = 0;
    this.bookTextArray[this.index].forEach((p,index)=>{
      this.lines.push(new BookLine(p,index));
    });
    this.text = this.lines;
    this.index++;
  }
  ngOnInit() {
  }

}
