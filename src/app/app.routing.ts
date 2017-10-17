import { RouterModule, Routes } from '@angular/router'
import { RoselewHomeComponent } from './roselew-home.component';
import { MateuszHomeComponent } from './mateusz-home.component';
import { DevHomeComponentComponent } from './dev-home-component.component';
import { MariuszHomeComponentComponent } from './mariusz-home-component.component';
import { NkamaszewskiHomeComponent } from './nkamaszewski-home.component';
import { KasiafinHomeComponent } from './kasiafin-home.component';

const routes:Routes = [
    { path:'roselew', component: RoselewHomeComponent},
    { path:'mateusz', component: MateuszHomeComponent},
    { path:'dev', component: DevHomeComponentComponent},
    { path:'mariusz', component: MariuszHomeComponentComponent},
    { path:'nkamaszewski', component: NkamaszewskiHomeComponent},
    { path:"kasiafin", component:KasiafinHomeComponent}
]

export const Routing = RouterModule.forRoot(routes)