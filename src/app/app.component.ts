import {Component, ViewEncapsulation} from '@angular/core';
import {TranslateService} from 'ng2-translate';


import {AuthService} from './user/auth.service';

import './app.component.scss';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // Remove Encapsulation to enable global scss support
    // https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-include-SCSS-in-components
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    //Tooltips are set to null, so we can ngIf them
    tooltips: any = null;
    primaryNav: any;
    secondaryNav: any;

    constructor(public auth: AuthService, public translate: TranslateService) {
        this.initializeTranslateServiceConfig();
        this.initTooltips();
        this.initNav();
    }

    /** @function initNav
     *
     * Initializes the Primary Navigation
     * */
    initNav() {
        this.translate.get('primary-nav').subscribe(data => {
            this.primaryNav = [
                {
                    link: "/dashboard",
                    icon: "fa fa-th",
                    name: data.dashboard,
                    login: true
                },
                {
                    link: "/about",
                    icon: "fa fa-question",
                    name: data.about,
                    login: true
                },
                {
                    link: "/login",
                    icon: "fa fa-sign-in",
                    name: data.login,
                    login: false
                },
                {
                    link: undefined,
                    icon: "fa fa-sign-out",
                    name: data.logout,
                    login: true
                }
            ]

            this.secondaryNav = [
                {
                    link: "/impressum",
                    icon: "fa fa-question-circle",
                    name: data.impressum
                }
            ]
        });
    }

    /** @function initTooltips
     *
     * Initializes the Tooltips for this application
     * We need to go this way if the tooltips are loaded asynchronously
     * Otherwise it won't display them correctly
     *
     * */
    initTooltips() {
        this.translate.get('primary-nav').subscribe((data: any) => {
            this.tooltips = [];
            this.tooltips['dashboard'] = data.dashboard;
            this.tooltips['about'] = data.about;
            this.tooltips['login'] = data.login;
            this.tooltips['logout'] = data.logout;
            this.tooltips['impressum'] = data.impressum;
        });
    }

    /** @function loginStatus
     *
     * Returns the Login Status of the current User
     *
     * */
    loginStatus() {
        return AuthService.isLoggedIn;
    }


    /** @function initializeTranslateServiceConfig
     *
     * Initializes the Translate Service
     * */
    initializeTranslateServiceConfig() {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(de|en)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang);
    }

}
