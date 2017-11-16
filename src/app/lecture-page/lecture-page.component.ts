import { Component, OnInit } from '@angular/core';
import {ServerConnector} from "../utils/services/server-connector.service";
import {BookLine} from "../utils/classes/BookLine";

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css']
})
export class LecturePageComponent implements OnInit {

  constructor(private serverConnector: ServerConnector){
    this.getListFromServer();
  }
  bookTextArray : string[][];
  text: BookLine[];
  index: number = 0;
  lines : BookLine[]= [];

  getListFromServer(){
    this.serverConnector.getData("http://localhost:8080/api/book/content?name=shmot").subscribe((data)=>{
      this.bookTextArray = data;
      this.nextPage();
    })
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
