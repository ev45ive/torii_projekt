import { RouterModule, Routes } from '@angular/router'
import { MateuszHomeComponent } from './mateusz-home.component';

const routes:Routes = [
    { path:'mateusz', component: MateuszHomeComponent}
]

export const Routing = RouterModule.forRoot(routes)