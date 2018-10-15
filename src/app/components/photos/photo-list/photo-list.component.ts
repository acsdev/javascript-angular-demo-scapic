import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
//
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';


@Component({
    selector: 'sca-photo-list',
    templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit, OnDestroy {

    photosList: Photo[];
    
    filter : string = '';
    
    debounce : Subject<string> = new Subject<string>();

    hasMorePhotos : boolean = true;
    pageSize      : number  = 12;
    currentPage   : number  = 1;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService) {}

    ngOnInit()  : void {
        this.photosList = this.route.snapshot.data['photoListFromResolver'];
        
        this.debounce
            .pipe( debounceTime( environment.timeOfDebounceType ) )
            .subscribe( data => this.filter = data);
    }

    ngOnDestroy(): void {

        this.debounce.unsubscribe(); //AVOID MEMORY LEAK
    }

    loadMorePhotos() : void {
        const username = this.route.snapshot.params['username'];

        this.photoService.getByUserPaginated( username, ++this.currentPage)
            .subscribe( photosListResult => {
                this.photosList   = this.photosList.concat( photosListResult ); // FORCE REFRESH BY ADDING NEW OBJECT AT photoList PROPERTY
                
                this.hasMorePhotos = ( photosListResult.length >= this.pageSize );
            });
    }
}