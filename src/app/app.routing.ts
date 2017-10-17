import { RouterModule, Routes } from '@angular/router'
import { Ev45iveHomeComponent } from './ev45ive-home.component';

const routes:Routes = [
    { path:'ev45ive', component: Ev45iveHomeComponent}
]

export const Routing = RouterModule.forRoot(routes)