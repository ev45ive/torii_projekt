import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { RoselewHomeComponent } from './roselew-home.component';
import { MariuszHomeComponentComponent } from './mariusz-home-component.component';
import { DevHomeComponentComponent } from './dev-home-component.component';
import { NkamaszewskiHomeComponent } from './nkamaszewski-home.component';
import { MateuszHomeComponent } from './mateusz-home.component';
import { DarekHomeComponentComponent } from './darek-home-component.component';
import { KasiafinHomeComponent } from './kasiafin-home.component';
import { MenuComponent } from './menu.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    AppComponent,
    RoselewHomeComponent,
    MariuszHomeComponentComponent,
    DevHomeComponentComponent,
    NkamaszewskiHomeComponent,
    MateuszHomeComponent,
    DarekHomeComponentComponent,
    KasiafinHomeComponent,
    MenuComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
