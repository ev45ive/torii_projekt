import { RouterModule, Routes } from '@angular/router'
import { RoselewHomeComponent } from './roselew-home.component';
import { MateuszHomeComponent } from './mateusz-home.component';

const routes:Routes = [
    { path:'roselew', component: RoselewHomeComponent},
    { path:'mateusz', component: MateuszHomeComponent}
]

export const Routing = RouterModule.forRoot(routes)