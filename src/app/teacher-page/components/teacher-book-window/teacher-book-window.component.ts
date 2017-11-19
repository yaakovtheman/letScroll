import {Component, OnInit, Input} from '@angular/core';
import {BookLine} from "../../../utils/classes/BookLine";
import * as $ from 'jquery';

// import * as Waypoint from 'C:/Scroll/letScroll/node_modules/waypoints/lib/noframework.waypoints.js'


@Component({
  selector: 'app-book-window',
  templateUrl: './teacher-book-window.component.html',
  styleUrls: ['./teacher-book-window.component.css']
})
export class TeacherBookWindowComponent implements OnInit {




  get bookText(): BookLine[] {
    return this._bookText;
  }

  private _bookText :BookLine[];
  lineAmount : number=0;

  @Input()
  set bookText(value: BookLine[]) {
    this._bookText = value;
    if(value)
    this.lineAmount = value.length
  }
  detect : any;
  detect2 : number;
  constructor() { }

  ngOnInit() {
    // var waypoint = new Waypoint({
    //   element: $('#p17'),
    //   handler: function(direction) {
    //     alert('Scrolled to waypoint!'+direction)
    //   }
    // })
  
    var self = this;
    $("#myBox").scroll((t)=> {
      // self.checkMe()
      console.log("j" + t);
    })
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


  enter() {
    console.log('Track scroll enter is working!');
  }
 
  leave() {
    console.log('Track scroll leave is working too!');
  }
}
