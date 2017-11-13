import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerConnector} from "./utils/services/server-connector.service";
import {HttpModule} from "@angular/http";
import {WelcomePageModule} from "./welcome-page/welcome-page.module";
import {RouterModule, Routes} from "@angular/router";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CreatePageComponent} from "./create-page/create-page.component";
import {LecturePageComponent} from "./lecture-page/lecture-page.component";
import {LecturePageModule} from "./lecture-page/lecture-page.module";
import {CreatePageModule} from "./create-page/create-page.module";

const appRoutes: Routes = [
  { path: 'lecture', component: LecturePageComponent },
  { path: 'create',component: CreatePageComponent },
  { path: 'welcome',component: WelcomePageComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    WelcomePageModule,
    LecturePageModule,
    CreatePageModule
  ],
  providers: [ServerConnector],
  bootstrap: [AppComponent]
})
export class AppModule { }
