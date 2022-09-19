import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompartidoModule } from './../compartido/compartido.module';
import { MaterialModulosModule } from './../compartido/material-modulos/material-modulos.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModulosModule,
    CompartidoModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
