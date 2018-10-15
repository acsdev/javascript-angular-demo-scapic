import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sca-load-button',
    templateUrl: './load-button.component.html',
})
export class LoadButtonComponent implements OnInit {

    @Input() showButton : boolean = true;

    constructor() { }

    ngOnInit() {

    }

}
