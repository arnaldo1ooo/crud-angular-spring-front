import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  pathMatch: 'full',redirectTo: 'cursos' },  //Cuando path es vacio, va a ser la ruta por defecto
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
