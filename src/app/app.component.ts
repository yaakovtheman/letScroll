import { Component } from '@angular/core';
import {ServerConnector} from "./utils/server-connector.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serverConnector: ServerConnector){
    this.getListFromServer();
  }
  title: string = "let'Scroll";
  text: string = "טוען...";

  getListFromServer(){
    this.serverConnector.getData("http://localhost:8080/api/book/content?name=shemot").subscribe((data)=>{
      this.text = data;
    })
  }
}
