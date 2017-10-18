import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { LayoutComponent } from './containers/layout.component';
import { HomeComponent } from './screens/home.component';
import { MenuComponent } from './views/menu.component';
import { LoginComponent } from './screens/login.component';
import { SearchComponent } from './screens/search.component';
import { TestComponent } from './screens/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SearchComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
