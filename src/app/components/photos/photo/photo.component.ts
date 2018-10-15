import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sca-photo',
    templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() url: string;

    @Input() description: string;
}
