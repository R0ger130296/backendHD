    import { Routes } from '@angular/router';

import { InicioComponent } from '../../inicio/inicio.component';
import { ListComponent } from '../../publicaciones/list/list.component';
import { EditComponent } from '../../publicaciones/edit/edit.component';
import { CreateComponent } from '../../publicaciones/create/create.component';
import { BusquedaComponent } from '../../publicaciones/busqueda/busqueda.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'publicaciones/list', component: ListComponent },
    { path: 'publicaciones/edit', component: EditComponent },
    { path: 'publicaciones/create', component: CreateComponent },
    { path: 'publicaciones/busqueda/:cedula', component: BusquedaComponent },
];
