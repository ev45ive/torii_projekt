import { RouterModule, Routes } from '@angular/router'
import { RoselewHomeComponent } from './roselew-home.component';

const routes:Routes = [
    {path:'roselew', component: RoselewHomeComponent}
]

export const Routing = RouterModule.forRoot(routes)