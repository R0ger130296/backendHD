import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { BusquedaComponent } from '../../publicaciones/busqueda/busqueda.component';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/busqueda', title: 'Buscar', icon: 'search', class: 'nav-pills-info' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    providers: [MessageService]
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    busqueda: BusquedaComponent;

    constructor(private router: Router, private messageService: MessageService) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    inicio() {
        this.router.navigate(['/publicaciones/list']);
    }

    buscar(param: string) {
        if (param.length) {
            // this.inicio();
            setTimeout(() => {
                this.router.navigate(['/publicaciones/busqueda', param]);
                this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Se ha realizado la búsqueda' });
            }, 50);
        } else {
            this.messageService.add({ severity: 'error', summary: 'Validación', detail: 'Ingrese una cédula valida' });
        }
    }
     numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode === 13) {
            if (event.srcElement.value.length < 10) {
                this.messageService.add({ severity: 'error', summary: 'Validación', detail: 'Ingrese una cedula válida' });
            } else {

                this.buscar(event.srcElement.value);
            }
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            this.messageService.add({ severity: 'warn', summary: 'Validación', detail: 'Ingrese solo números' });
            return false;

        }
        return true;
    }
}
