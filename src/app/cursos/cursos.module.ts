import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompartidoModule } from './../compartido/compartido.module';
import { MaterialModulosModule } from './../compartido/material-modulos/material-modulos.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CursoFormComponent } from './containers/curso-form/curso-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';


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
