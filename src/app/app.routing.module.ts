import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
//
import { PhotoListResolver } from './components/photos/photo-list/core/photo-list.resolver';

const routes: Routes = [
    {   path     : 'user/:username',
        component: PhotoListComponent,
        resolve  : {
            photoListFromResolver : PhotoListResolver
        }
    },
    {path: 'p/add', component: PhotoFormComponent },
    {path: '**', component: NotfoundComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}