    import { Pipe, PipeTransform } from '@angular/core';
//
import { Photo } from '../../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
    
    transform(photos: Photo[], descriptionFilter: string) : Photo[] {

        descriptionFilter = descriptionFilter.trim().toLowerCase();
        if ( descriptionFilter ) {
            return photos.filter( p => p.description.toLowerCase().includes(descriptionFilter) );
        }

        return photos; // JUST IN CASE FILTER IS NULL
    }

}