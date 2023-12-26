import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListarComponent } from './estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteCrearComponent } from './estudiante/estudiante-crear/estudiante-crear.component';



@NgModule({
  declarations: [
    EstudianteListarComponent,
    EstudianteCrearComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SiaModule { }
