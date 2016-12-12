import { Component } from '@angular/core';

import {TranslateService} from "ng2-translate";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    tiles: any;

    constructor(public translate: TranslateService) {
        this.initTiles();
    }

    /** @function initTiles
     *
     * Initializes the Tiles
     * */
    initTiles() {
        this.translate.get('dashboard').subscribe(data => {
            this.tiles = [
                { link: "/materialize", icon: "fa fa-css3", name: data.materialize },
                { link: "/list", icon: "fa fa-list-alt", name: data.list },
                { link: "/fontawesome", icon: "fa fa-font-awesome", name: data.fontawesome }
            ]
        });
    }
}
