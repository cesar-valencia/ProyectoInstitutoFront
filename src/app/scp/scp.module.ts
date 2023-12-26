import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioCrearComponent } from './usuario/usuario-crear/usuario-crear.component';
import { ModuloCrearComponent } from './modulo/modulo-crear/modulo-crear.component';
import { ModuloListarComponent } from './modulo/modulo-listar/modulo-listar.component';
import { ComponenteListarComponent } from './componente/componente-listar/componente-listar.component';
import { ComponenteCrearComponent } from './componente/componente-crear/componente-crear.component';
import { GrupoCrearComponent } from './grupo/grupo-crear/grupo-crear.component';
import { GrupoListarComponent } from './grupo/grupo-listar/grupo-listar.component';
import { MenuListarComponent } from './menu/menu-listar/menu-listar.component';
import { MenuCrearComponent } from './menu/menu-crear/menu-crear.component';
import { GrupoComponenteCrearComponent } from './grupo_componente/grupo-componente-crear/grupo-componente-crear.component';
import { GrupoComponenteListarComponent } from './grupo_componente/grupo-componente-listar/grupo-componente-listar.component';

@NgModule({
  declarations: [
    UsuarioListarComponent,
    UsuarioCrearComponent,
    ModuloCrearComponent,
    ModuloListarComponent,
    ComponenteListarComponent,
    ComponenteCrearComponent,
    GrupoCrearComponent,
    GrupoListarComponent,
    MenuListarComponent,
    MenuCrearComponent,
    GrupoComponenteCrearComponent,
    GrupoComponenteListarComponent,
  ],
  exports: [
    UsuarioListarComponent,
    UsuarioCrearComponent,
    ModuloCrearComponent,
    ModuloListarComponent,
    ComponenteListarComponent,
    ComponenteCrearComponent,
    GrupoCrearComponent,
    GrupoListarComponent,
    MenuListarComponent,
    MenuCrearComponent,
    GrupoComponenteCrearComponent,
    GrupoComponenteListarComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class ScpModule {}
