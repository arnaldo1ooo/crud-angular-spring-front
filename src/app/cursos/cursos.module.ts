import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModulosModule } from './../compartido/material-modulos/material-modulos.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModulosModule
  ]
})
export class CursosModule { }
