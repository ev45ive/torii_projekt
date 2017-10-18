import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Routing } from "./app.routing";
import { LayoutComponent } from './containers/layout.component';
import { HomeComponent } from './screens/home.component';
import { MenuComponent } from './views/menu.component';
import { LoginComponent } from './screens/login.component';
import { SearchComponent } from './screens/search.component';
import { TestComponent } from './screens/test.component';
import { UserPanelComponent } from './containers/user-panel.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SearchComponent,
    TestComponent,
    UserPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
