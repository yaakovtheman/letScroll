import { Component, OnInit } from '@angular/core';
import { InitAppService } from '../utils/services/init-app.service';
import { ServerConnector } from '../utils/services/server-connector.service';
import { JoinService } from '../utils/services/login.service';
import { BookHeader } from '../utils/classes/BookHeader';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: 'create-page.component.html',
  styleUrls: ['create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  selectedBook: BookHeader;
  bookHeaders: any[]; 
  lecturerName: string;
  subject: string;
  subscription: Subscription

  constructor(private serverConnector: ServerConnector,
              private initAppService: InitAppService,
            private joinService: JoinService,
          private router: Router) { }

  ngOnInit() {
    this.serverConnector.getData(this.initAppService.serverUrl + 'list').subscribe((data)=>{
      this.bookHeaders = data;
      this.selectedBook = this.bookHeaders[0];
    });
    this.subscription = this.joinService.navItemSource
    .subscribe((isLec) => {
      if(isLec)
      this.router.navigateByUrl('/teacher');
    })
  }

  onInput($event) {
    $event.preventDefault();
    this.selectedBook = this.bookHeaders.find(el => $event.target.value == el.bookId); 
   console.log(this.selectedBook);
  }

  onSubmit() {
    console.log(this.lecturerName + ' ' + this.subject + ' ' + this.selectedBook.bookId);
    this.joinService.createLecture({subject: this.subject, bookId: this.selectedBook.bookId, masterNick: this.lecturerName});
  }

}
