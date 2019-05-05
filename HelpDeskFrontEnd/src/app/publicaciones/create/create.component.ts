import { Estudiante } from './../../models/Estudiante';
import { EstudianteService } from './../../services/Estudiante.service';
import { Genero } from './../../models/Genero';
import { GeneroService } from './../../services/Genero.service';
import { Persona } from './../../models/Persona';
import { PersonaService } from './../../services/Persona.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  PersonaService: any;
  personas: any;
  persona: Persona;

  date: Date;
  constructor(
    private http: HttpClient,
    private personaDataService: PersonaService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.buscarDatosPersona();
  }
  buscarDatosPersona() {
    this.personaDataService.buscarDatosPersona( ).subscribe(respuesta => {
      this.personas = JSON.parse(respuesta._body);
      console.log('this.personas', this.personas);
    },
    err => {
      console.log(err);
    }
    );
  }

  public deletePersonas(persona: Persona): void {
    this.personaDataService.deletePersonas(persona);
  }
}

