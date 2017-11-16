import { Component } from '@angular/core';
import {ServerConnector} from "./utils/services/server-connector.service";
import {InitAppService} from "./utils/services/init-app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(InitAppService:InitAppService){}
  title: string = "let'Scroll";

}
