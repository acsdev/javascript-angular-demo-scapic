import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
    selector: 'sca-photos',
    templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnChanges {
    
    @Input() photosListSource: Photo[] = []; // Arrar of photos

    rows : any[] = []; // Array of array of photos

    constructor() {

    }

    ngOnChanges( changes: SimpleChanges ): void {
        
        if ( changes.photosListSource ) { // CHECK IF photosListSource INBOUND PROPERY CHANGES.
            this.rows = this.spliceAndGroupPhotos( this.photosListSource );
        }        
    }

    spliceAndGroupPhotos( photos: Photo[] ) {
        const newRows = [];
        
        for (let index = 0; index < photos.length; index += 3) {
            newRows.push( photos.slice(index, index + 3) );
        }
        
        return newRows;
    }
}