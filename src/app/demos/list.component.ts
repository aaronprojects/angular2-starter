import {Component} from '@angular/core';


@Component({
    selector: 'about',
    templateUrl: 'list.component.html'
})
export class ListComponent {
    data: any;
    icons: any = [
        "fa fa-user",
        "fa fa-meetup",
        "fa fa-500px",
        "fa fa-thermometer",
        "fa fa-anchor",
        "fa fa-bomb"
    ];

    filterKey = "category";

    searchValTab1: string;
    sortingOrderTab1 = '+';
    sortingPropertyTab1 = 'title';
    tab1Filter : any = [1,2,3,4,5];
    showFilterTab1: boolean = false;
    advancedFilterTab1: string = "Text";

    searchValTab2: string;
    sortingOrderTab2 = '+';
    sortingPropertyTab2 = 'title';
    tab2Filter: any = [6,7,8,9,10];

    constructor() {
        this.initDummyData();
    }

    /** @function initDummyData
     *
     * Initializes some Dummy Data
     *
     * */
    initDummyData() {
        this.data = [];
        for (var i = 1; i < 100; i++) {
            var element = {
                title: "Element Nummer " + i,
                description: "Lorem Ipsum Text Nummer " + Math.floor(Math.random() * 100),
                icon: this.icons[Math.floor(Math.random() * (this.icons.length - 1))],
                attr1: "Attribut 1",
                attr2: "Attribut 2",
                attr3: "Attribut 3",
                category: Math.floor(Math.random() * 10) + 1
            };
            this.data.push(element);
        }
    }
}
