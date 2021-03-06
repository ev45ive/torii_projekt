import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './screens/home.component';
import { LoginComponent } from './screens/login.component';
import { SearchComponent } from './screens/search.component';
import { TestComponent } from './screens/test.component';
import { FavouritesComponent } from "./screens/favourites.component";


const routes:Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent},
    { path:'search', component: SearchComponent},
    { path:'test', component: TestComponent},
    { path:'favourites', component: FavouritesComponent},
]

export const Routing = RouterModule.forRoot(routes)