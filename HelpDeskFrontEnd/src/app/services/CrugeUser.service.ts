import { CrugerUser } from './../models/CrugerUser';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http , Headers } from '@angular/http';


const httpOptions = {
    headers: new Headers({ 'Content-Type': 'aplication/json'})
};
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdateCrugeUser';
const API_URL_CEDULA = 'http://localhost:8080//getCrugeUser/Cedula/cedula?cedula=';
const API_URL_DELETE = 'http://localhost:8080//deleteCrugeUser';

@Injectable()
export class CrugerUserService {
    constructor(private http: Http) {}

    saveOrUpdateCrugeUser(crugeruser: CrugerUser): Observable<any>  {
        return this.http.post(API_URL_CREATE, JSON.stringify(crugeruser));
    }
    buscarDatosCrugeruserCedula(cedula): Observable<any> {
        return this.http.get(API_URL_CEDULA + cedula);
    }
    deleteCrugeruser(crugeruser: CrugerUser): Observable<any> {
        return this.http.post(API_URL_DELETE, JSON.stringify(crugeruser));
    }
}

