import { CrugerUserService } from './../../services/CrugeUser.service';
import { CrugerUser } from './../../models/CrugerUser';
import { Persona } from '../../models/Persona';
import { PersonaService } from '../../services/Persona.service';



import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit, OnDestroy {
  navigationSubcription;
  public personaData: Array<Persona>;
  public crugeruserData: Array<CrugerUser>;
  cedula: number;
  datos: boolean;
  title = 'sweetalert';

// tslint:disable-next-line: max-line-length
  constructor(private personaService: PersonaService, private crugeruserService: CrugerUserService, private route: ActivatedRoute, private router: Router) {
    this.cedula = this.route.snapshot.params.cedula;
    this.navigationSubcription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.Busqueda_por_CEDULA();
      }
    });
  }

  Busqueda_por_CEDULA() {
    this.cedula = this.route.snapshot.params.cedula;
    console.log(this.cedula);
    this.buscarDatosPersonaCed(this.cedula);
    this.buscarDatosCrugeruserCed(this.cedula);
  }
  ngOnInit() {
    const url = this.route.snapshot.pathFromRoot.pop().url.map(u => u.path).join('/');
    this.router.navigateByUrl(url);
  }

  buscarDatosPersonaCed(cedula) {
    this.personaService.buscarDatosPersonaCedula(cedula).subscribe
    (data => {
      if (data) {
        this.personaData = JSON.parse(data._body);
        console.log('this.personaData', this.personaData);
        this.datos = true;
        if (Object.keys(data).length === 0) {
          this.datos = false;
        }
      }
    },
    err => {
      console.log(err);
    });
  }

  buscarDatosCrugeruserCed(cedula) {
    this.crugeruserService.buscarDatosCrugeruserCedula(cedula).subscribe
    (data => {
      if (data) {
        this.crugeruserData = JSON.parse(data._body);
        console.log('this.crugeruserData', this.crugeruserData);
        this.datos = true;
        if (Object.keys(data).length === 0) {
          this.datos = false;
        }
      }
    },
    err => {
      console.log(err);
    });
  }

  enviar(cedula: Number) {
    this.router.navigate(['/confirmacion/', cedula]);
  }


// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    if (this.navigationSubcription) {
      this.navigationSubcription.unsubscribe();
    }
  }

  Borrar(personaData: Persona, crugeruserData: CrugerUser) {
    if (personaData === undefined) {return; }
    this.personaService.deletePersonas(personaData)
    .subscribe( respuesta  => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se borro con exito'
      });
      this.personaData = respuesta;
      console.log (respuesta)
      });
      if (crugeruserData === undefined) {return; }
    this.crugeruserService.deleteCrugeruser(crugeruserData)
    .subscribe( respuesta  => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Se borro con exito'
      });
      this.crugeruserData = respuesta;
      console.log (respuesta)
      });
  }

  public edit(personaData: Persona, crugeruserData: CrugerUser): void {
    sessionStorage.setItem('personaData', JSON.stringify(personaData));
    sessionStorage.setItem('crugeruserData', JSON.stringify(crugeruserData));
  }

}


