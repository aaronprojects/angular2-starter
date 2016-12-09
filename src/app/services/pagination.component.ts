import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
@Component({
    selector: 'pagination',
    templateUrl: "./pagination.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {

    @Input() id: string;
    @Input() maxSize: number = 7;

    @Input()
    get directionLinks(): boolean {
        return this._directionLinks;
    }

    set directionLinks(value: boolean) {
        this._directionLinks = !!value && <any>value !== 'false';
    }

    @Input()
    get autoHide(): boolean {
        return this._autoHide;
    }

    set autoHide(value: boolean) {
        this._autoHide = !!value && <any>value !== 'false';
    }

    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    private _directionLinks: boolean = true;
    private _autoHide: boolean = false;
}