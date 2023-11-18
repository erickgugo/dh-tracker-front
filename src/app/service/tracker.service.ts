import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8001/';

@Injectable({
    providedIn: 'root'
})
export class TrackerService {


    constructor(private http: HttpClient) {
    }

    public getRest(url: string): Observable<any> {
        const patch = AUTH_API + url;
        console.log(patch)
        return this.http.get(patch, {responseType: 'json'});
    }

}
