import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { MariuszHomeComponentComponent } from './mariusz-home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MariuszHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
