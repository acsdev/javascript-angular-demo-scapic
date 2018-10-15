import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
//
import { FilterByDescriptionPipe } from './photo-list/core/filter-by-description.pipe';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        PhotoComponent,
        PhotosComponent,
        PhotoListComponent,
        PhotoFormComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
        
    ]
})
export class PhotosModule { }
