import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from '../pages/pages.component';
import { PersonaListarComponent } from './persona/persona-listar/persona-listar.component';
import { PersonaCrearComponent } from './persona/persona-crear/persona-crear.component';
import { EmpresaListarComponent } from './empresa/empresa-listar/empresa-listar.component';
import { EmpresaCrearComponent } from './empresa/empresa-crear/empresa-crear.component';

const routes: Routes = [
  // Componentes para la tabla persona
  {
    path: 'persona',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: PersonaListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: PersonaCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
  // Componentes para la tabla empresa
  {
    path: 'empresa',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: EmpresaListarComponent,
        data: { titulo: 'listar' },
      },
      {
        path: 'crear',
        component: EmpresaCrearComponent,
        data: { titulo: 'crear' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SipRoutingModule {}
