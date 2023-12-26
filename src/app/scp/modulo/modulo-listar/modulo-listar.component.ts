import { UsuarioService } from './../../../services/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo-listar',
  templateUrl: './modulo-listar.component.html',
  styles: [],
})
export class ModuloListarComponent {
  moduloItems: any[] = [
    {
      id: '01',
      nombre: 'S.C.P. Admin',
      descripcion: 'Admin App SCP',
    },
    {
      id: '02',
      nombre: 'S.I.P',
      descripcion: 'Sistema de Informacion personal',
    },
    {
      id: '03',
      nombre: 'S.I.A',
      descripcion: 'Sistema de Informacion Academico',
    },
  ];

  constructor(private UsuarioService: UsuarioService) {
    // this.moduloItems = UsuarioService.menu;
  }
}
