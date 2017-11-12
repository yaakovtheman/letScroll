import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerConnector} from "./utils/server-connector.service";
import {HttpModule} from "@angular/http";
import {WelcomePageModule} from "./welcome-page/welcome-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WelcomePageModule
  ],
  providers: [ServerConnector],
  bootstrap: [AppComponent]
})
export class AppModule { }
