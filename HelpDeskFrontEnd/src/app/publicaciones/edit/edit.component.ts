import { CrugerUserService } from './../../services/CrugeUser.service';
import { CrugerUser } from './../../models/CrugerUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonaService } from './../../services/Persona.service';
import { Persona } from './../../models/Persona';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  persona: Persona = new Persona();
  crugeruser: CrugerUser = new CrugerUser();
  title = 'sweetalert';


  constructor(private personaDataService: PersonaService, private crugeruserDataService: CrugerUserService) {
    if (sessionStorage.getItem('personaData'), sessionStorage.getItem('crugeruserData')) {
      this.persona = JSON.parse(sessionStorage.getItem('personaData'));
      console.log('hay esta');
      this.crugeruser = JSON.parse(sessionStorage.getItem('crugeruserData'));
      console.log('hay esta2');
    } else {
      this.persona = new Persona();
      this.crugeruser = new CrugerUser();
    }
  }
  ngOnInit() {
  }
  Actualizar(personas: Persona, crugerusers: CrugerUser): void {
    this.personaDataService.crearOActualizarPersona(personas)
    .subscribe(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se guardo con exito'
      });
    })
    this.crugeruserDataService.saveOrUpdateCrugeUser(crugerusers)
    .subscribe(data => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-left',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se guardo con exito'
      });
    })
  }
}
