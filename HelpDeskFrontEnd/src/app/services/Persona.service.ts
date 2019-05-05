import { Http, Response,  Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../models/Persona';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new Headers({ 'Content-Type': 'aplication/json'})
};
const API_URL = 'http://localhost:8080/getPersonas';
const API_URL_CEDULA = 'http://localhost:8080//getPersonas/Cedula/cedula?cedula=';
const API_URL_APELLIDOS = 'http://localhost:8080//getPersonas/Apellido/apellido?apellido=';
const API_URL_NOMBRES = 'http://localhost:8080//getPersonas/Nombre/{nombre}';
const API_URL_CORREOE = 'http://localhost:8080//getPersonas/CorreoEspe/{correoEspe}';
const API_URL_CORREOP = 'http://localhost:8080//getPersonas/CorreoPersonal/{correoPersonal}';
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdatePersona';
const API_URL_DELETE = 'http://localhost:8080/deletePersonas';

@Injectable()

export class PersonaService {
    constructor(private http: Http) {}

    buscarDatosPersona(): Observable<any> {
        return this.http.get(API_URL);
    }
    buscarDatosPersonaCedula(cedula): Observable<any> {
        return this.http.get(API_URL_CEDULA + cedula);

    }
    buscarDatosPersonaApellidos(): Observable<any> {
        return this.http.get(API_URL_APELLIDOS);
    }
    buscarDatosPersonaNombres(): Observable<any> {
        return this.http.get(API_URL_NOMBRES);
    }
    buscarDatosPersonaCorreoE(): Observable<any> {
        return this.http.get(API_URL_CORREOE);
    }
    buscarDatosPersonaCorreoP(): Observable<any> {
        return this.http.get(API_URL_CORREOP);
    }
    crearOActualizarPersona(persona: Persona): Observable<any> {
        return this.http.post(API_URL_CREATE, JSON.stringify(persona ));
    }
    deletePersonas(persona: Persona): Observable<any> {
        console.log('service', persona)
        return this.http.post(API_URL_DELETE, JSON.stringify(persona));
    }
}
