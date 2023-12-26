import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  menuItems: any[] = [];
  // private sidebarService: SidebarService
  constructor(private UsuarioService: UsuarioService) {
    this.menuItems = UsuarioService.menu;
  }
}
