import {Component, OnInit, Input} from '@angular/core';
import {BookLine} from "../../../utils/classes/BookLine";

@Component({
  selector: 'app-book-window',
  templateUrl: './book-window.component.html',
  styleUrls: ['./book-window.component.css']
})
export class BookWindowComponent implements OnInit {
  @Input()
  bookText :BookLine;
  constructor() { }
  goToIndex(num:any){
    var elements = document.getElementById("p"+num).scrollIntoView({ behavior: 'smooth' })
  }
  ngOnInit() {
  }

}
