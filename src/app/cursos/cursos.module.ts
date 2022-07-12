import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompartidoModule } from './../compartido/compartido.module';
import { MaterialModulosModule } from './../compartido/material-modulos/material-modulos.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursoFormComponent } from './curso-form/curso-form.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModulosModule,
    CompartidoModule
  ]
})
export class CursosModule { }
