import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../inicio/inicio.component';
import { ListComponent } from '../../publicaciones/list/list.component';
import { EditComponent } from '../../publicaciones/edit/edit.component';
import { CreateComponent } from '../../publicaciones/create/create.component';
import { InputMaskModule} from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { BusquedaComponent } from '../../publicaciones/busqueda/busqueda.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    CalendarModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    InputMaskModule
  ],
  declarations: [
    InicioComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    BusquedaComponent,
  ]
})

export class AdminLayoutModule {}
