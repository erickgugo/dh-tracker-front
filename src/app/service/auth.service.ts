import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Actividad} from "../model/Actividad";
import {User} from "../model/User";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    autentication(usuario: string, password: string): Observable<any> {
        let user: User = {};
        if(usuario === 'admin' && password === 'admin'){
            user = {
                usuario: usuario,
                nombreCompleto: 'Erick Gutierrez',
                rol: 'ADMIN'
            };
            return new Observable((observer) => {
                observer.next(user);
                observer.complete();
            });
        }
        return new Observable((observer) => {
            observer.error("Usuario o Password invalidos.");
            observer.complete();
        });
    }

    // logout(): Observable<any> {
    //   return ;
    // }
}
