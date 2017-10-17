import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { NkamaszewskiHomeComponent } from './nkamaszewski-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NkamaszewskiHomeComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
