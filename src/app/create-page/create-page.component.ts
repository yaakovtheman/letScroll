import { Component, OnInit } from '@angular/core';
import { InitAppService } from '../utils/services/init-app.service';
import { ServerConnector } from '../utils/services/server-connector.service';
import { JoinService } from '../utils/services/login.service';
import { BookHeader } from '../utils/classes/BookHeader';

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
  

  constructor(private serverConnector: ServerConnector,
              private initAppService: InitAppService,
            private joinService: JoinService) { }

  ngOnInit() {
    this.serverConnector.getData(this.initAppService.serverUrl + 'list').subscribe((data)=>{
      this.bookHeaders = data;
      this.selectedBook = this.bookHeaders[0];
    });
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
