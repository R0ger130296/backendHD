import { PersonaService } from './services/Persona.service';
import { GeneroService } from './services/Genero.service';
import { EstudianteService } from './services/Estudiante.service';
import { CrugerUserService } from './services/CrugeUser.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { NgModule, LOCALE_ID} from '@angular/core';



import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule} from 'primeng/inputmask';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    FieldsetModule,
    ToastModule,
    CalendarModule,
    PaginatorModule,
    InputMaskModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [CrugerUserService, EstudianteService, GeneroService, PersonaService, { provide: LOCALE_ID, useValue: 'es' },
],
  bootstrap: [AppComponent]
})
export class AppModule { }

