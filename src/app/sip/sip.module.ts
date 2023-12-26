import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaCrearComponent } from './persona/persona-crear/persona-crear.component';
import { PersonaListarComponent } from './persona/persona-listar/persona-listar.component';
import { EmpresaListarComponent } from './empresa/empresa-listar/empresa-listar.component';
import { EmpresaCrearComponent } from './empresa/empresa-crear/empresa-crear.component';
import { CargoCrearComponent } from './cargo/cargo-crear/cargo-crear.component';
import { CargoListarComponent } from './cargo/cargo-listar/cargo-listar.component';
import { ExperienciaListarComponent } from './experiencia/experiencia-listar/experiencia-listar.component';
import { ExperienciaCrearComponent } from './experiencia/experiencia-crear/experiencia-crear.component';
import { IdiomaCrearComponent } from './idioma/idioma-crear/idioma-crear.component';
import { IdiomaListarComponent } from './idioma/idioma-listar/idioma-listar.component';
import { UbicacionListarComponent } from './ubicacion/ubicacion-listar/ubicacion-listar.component';
import { UbicacionCrearComponent } from './ubicacion/ubicacion-crear/ubicacion-crear.component';
import { ReferenciaCrearComponent } from './referencia/referencia-crear/referencia-crear.component';
import { ReferenciaListarComponent } from './referencia/referencia-listar/referencia-listar.component';
import { EstudioListarComponent } from './estudio/estudio-listar/estudio-listar.component';
import { EstudioCrearComponent } from './estudio/estudio-crear/estudio-crear.component';
import { PasatiempoCrearComponent } from './pasatiempo/pasatiempo-crear/pasatiempo-crear.component';
import { PasatiempoListarComponent } from './pasatiempo/pasatiempo-listar/pasatiempo-listar.component';



@NgModule({
  declarations: [
    PersonaCrearComponent,
    PersonaListarComponent,
    EmpresaListarComponent,
    EmpresaCrearComponent,
    CargoCrearComponent,
    CargoListarComponent,
    ExperienciaListarComponent,
    ExperienciaCrearComponent,
    IdiomaCrearComponent,
    IdiomaListarComponent,
    UbicacionListarComponent,
    UbicacionCrearComponent,
    ReferenciaCrearComponent,
    ReferenciaListarComponent,
    EstudioListarComponent,
    EstudioCrearComponent,
    PasatiempoCrearComponent,
    PasatiempoListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SipModule { }
