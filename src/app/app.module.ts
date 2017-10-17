import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { MateuszHomeComponent } from './mateusz-home.component';


@NgModule({
  declarations: [
    AppComponent,
    MateuszHomeComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
