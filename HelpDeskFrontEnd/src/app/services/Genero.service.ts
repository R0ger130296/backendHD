import { Observable } from 'rxjs';
import { Genero } from '../models/Genero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
};
const API_URL = 'http://localhost:8080/getGenero';
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdateGenero';
@Injectable()

export class GeneroService {
    apiUrl: string;
    constructor(private http:HttpClient) {}

    buscarGenero(): Observable<any>{
        return this.http.get(API_URL);
    }
    crearOActualizarGenero(genero: Genero): Observable<Genero[]>{
        return this.http.post<Genero[]>(API_URL_CREATE,genero );
    }
}