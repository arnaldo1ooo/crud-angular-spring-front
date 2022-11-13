import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

//Un resolver se ejecuta al clickar en un boton y antes de que cargue el enlace de la misma

@Injectable({
  providedIn: 'root'
})
export class CursoResolver implements Resolve<Curso> {

  constructor(private service: CursosService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso>  {
    if(route.params && route.params['id']){  //Si ruta tiene parametros y existe parametro id
      return this.service.cargarPorId(route.params['id']);  //Devuelve el curso
    }

    return of({ _id: '', nombre: '', categoria: '' }); //Devuelve un curso vacio
  }
}
