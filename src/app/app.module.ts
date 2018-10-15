import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app.routing.module';
//
import { PhotosModule } from './components/photos/photos.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ErrorsModule,
        AppRoutingModule,
        PhotosModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
