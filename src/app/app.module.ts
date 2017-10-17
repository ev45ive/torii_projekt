import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { Ev45iveHomeComponent } from './ev45ive-home.component';


@NgModule({
  declarations: [
    AppComponent,
    Ev45iveHomeComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
