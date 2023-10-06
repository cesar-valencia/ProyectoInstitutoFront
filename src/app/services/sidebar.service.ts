import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ],
    },
    {
      titulo: 'Usuarios App',
      icono: 'mdi mdi-wrench',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ],
    },
  ];

  constructor() {}
}
