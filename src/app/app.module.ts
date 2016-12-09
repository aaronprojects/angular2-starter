import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Http, HttpModule} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import {MaterializeDirective} from "angular2-materialize";
import {Ng2PaginationModule} from "ng2-pagination";
import {PaginationComponent} from "./services/pagination.component";

import { LoginComponent } from './user/login.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './start/dashboard.component';
import { AboutComponent } from './start/about.component';
import { ImpressumComponent } from './start/impressum.component';
import { ErrorComponent } from './error.component';

import { AuthService }         from './user/auth.service';
import { AuthGuard }         from './user/auth.guard';

import { routing }        from './app.routing';

import {Search, Filter, OrderBy, AdvancedFilter, TimeAgoPipe, AutocompleteComponent} from 'aaron-ng2-utils/aaron-ng2-utils';

import {FontAwesomeComponent} from "./demos/fontawesome.component";
import {ListComponent} from "./demos/list.component";
import {MaterializeComponent} from "./demos/materialize.component";

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        Ng2PaginationModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '../../assets/lang', '.json'),
            deps: [Http]
        })
    ],
    exports: [BrowserModule, HttpModule, TranslateModule],
    declarations: [
        MaterializeDirective,
        LoginComponent,
        AppComponent,
        DashboardComponent,
        AboutComponent,
        ErrorComponent,
        ImpressumComponent,
        Search,
        Filter,
        OrderBy,
        AdvancedFilter,
        TimeAgoPipe,
        AutocompleteComponent,
        FontAwesomeComponent,
        ListComponent,
        MaterializeComponent,
        PaginationComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
