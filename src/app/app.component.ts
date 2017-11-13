import { Component } from '@angular/core';
import {ServerConnector} from "./utils/services/server-connector.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "let'Scroll";

}
