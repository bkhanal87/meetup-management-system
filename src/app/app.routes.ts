import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {
        path:'navbar',
        component:NavbarComponent
    },
    {
        path:'footer',
        component:FooterComponent
    },
];
