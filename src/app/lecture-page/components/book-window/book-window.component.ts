import {Component, OnInit, Input} from '@angular/core';
import {BookLine} from "../../../utils/classes/BookLine";
import * as $ from 'jquery';

@Component({
  selector: 'app-book-window',
  templateUrl: './book-window.component.html',
  styleUrls: ['./book-window.component.css']
})
export class BookWindowComponent implements OnInit {
  @Input()
  bookText :BookLine;
  detect : any;
  detect2 : number;
  constructor() { }
  goToIndex(num:any){
    var elements = document.getElementById("p"+num).scrollIntoView();
    this.detect = this.checkMe($("#p17"),$("#myBox"))
  }
  ngOnInit() {
;
  }
  checkMe(e,p): boolean{
    var z = p.getBoundingClientRect();
    var r = e.getBoundingClientRect();

    // Check style visiblilty and off-limits
    return e.style.opacity > 0 && e.style.display !== 'none' &&
      e.style.visibility !== 'hidden' &&
      !(r.top > z.bottom || r.bottom < z.top ||
      r.left > z.right || r.right < z.left);
  }
  handlerFunction(){
    // this.detect = $('#myBox').children(":visible").text()
    var offset = $("#p14").offset().top - $("#myBox").scrollTop();

    if(offset > window.innerHeight){
      // Not in view so scroll to it
      $('html,body').animate({scrollTop: offset}, 1000);
      return false;
    }
    return true;
  }

}
