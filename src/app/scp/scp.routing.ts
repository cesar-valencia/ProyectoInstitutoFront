import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { PagesComponent } from '../pages/pages.component';

import { UsuarioCrearComponent } from './usuario/usuario-crear/usuario-crear.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { ModuloListarComponent } from './modulo/modulo-listar/modulo-listar.component';
import { ModuloCrearComponent } from './modulo/modulo-crear/modulo-crear.component';
import { MenuListarComponent } from './menu/menu-listar/menu-listar.component';
import { MenuCrearComponent } from './menu/menu-crear/menu-crear.component';
import { ComponenteListarComponent } from './componente/componente-listar/componente-listar.component';
import { ComponenteCrearComponent } from './componente/componente-crear/componente-crear.component';
import { GrupoListarComponent } from './grupo/grupo-listar/grupo-listar.component';
import { GrupoCrearComponent } from './grupo/grupo-crear/grupo-crear.component';
import { GrupoComponenteListarComponent } from './grupo_componente/grupo-componente-listar/grupo-componente-listar.component';
import { GrupoComponenteCrearComponent } from './grupo_componente/grupo-componente-crear/grupo-componente-crear.component';

const routes: Routes = [
  // Componentes para la tabla usuario
  {
    path: 'usuario',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: UsuarioListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: UsuarioCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla módulos
  {
    path: 'modulos',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: ModuloListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'listar',
        component: ModuloListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: ModuloCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla menú
  {
    path: 'menu',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: MenuListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: MenuCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla componente
  {
    path: 'componente',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: ComponenteListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: ComponenteCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla grupo
  {
    path: 'grupo',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: GrupoListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: GrupoCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla menu
  {
    path: 'menu',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: MenuListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: MenuCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla menu
  {
    path: 'grupo_componente',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: GrupoComponenteListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'listar',
        component: GrupoComponenteListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: GrupoComponenteCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScpRoutingModule {}
