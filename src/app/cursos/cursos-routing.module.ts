import { CursoResolver } from './guards/curso.resolver';
import { CursoFormComponent } from './containers/curso-form/curso-form.component';
import { CursosComponent } from './containers/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'nuevo', component: CursoFormComponent, resolve: { curso: CursoResolver } },
  { path: 'editar/:id', component: CursoFormComponent, resolve: { curso: CursoResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
