import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//
import { Photo } from './photo';

const API  : string = 'http://localhost:3000/';

@Injectable( {providedIn:'root'} )
export class PhotoService {

    constructor(private http: HttpClient) {    
    }

    getByUserPaginated(userName: string, pageNumber: number) : Observable<Photo[]>{
        let params = new HttpParams();
        params = params.append('page', pageNumber.toString());
        // 
        return this.http.get<Photo[]>( API.concat(`${userName}/photos`), { params } );
    }
}