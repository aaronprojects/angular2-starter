import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';

import { DashboardComponent } from './start/dashboard.component';
import { AboutComponent } from './start/about.component';
import { LoginComponent } from './user/login.component';

import { AuthGuard } from './user/auth.guard';
import {ImpressumComponent} from "./start/impressum.component";
import {ListComponent} from "./demos/list.component";
import {MaterializeComponent} from "./demos/materialize.component";
import {FontAwesomeComponent} from "./demos/fontawesome.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'impressum',
        component: ImpressumComponent
    },
    {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'materialize',
        component: MaterializeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'fontawesome',
        component: FontAwesomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: ErrorComponent,
        canActivate: [AuthGuard]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
