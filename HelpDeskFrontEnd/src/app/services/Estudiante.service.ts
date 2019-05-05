import { Observable } from 'rxjs';
import { Estudiante } from '../models/Estudiante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
};
const API_URL = 'http://localhost:8080/getEstudiante';
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdateEstudiante';
@Injectable()

export class EstudianteService {
    apiUrl: string;
    constructor(private http:HttpClient) {}

    buscarEstudiante(): Observable<any>{
        return this.http.get(API_URL);
    }
    crearOActualizarEstudiante(estudiante: Estudiante): Observable<Estudiante[]>{
        return this.http.post<Estudiante[]>(API_URL_CREATE,estudiante );
    }
}