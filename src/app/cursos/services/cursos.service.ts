import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'api/cursos';

  constructor(private htppClient: HttpClient) { } //El httpClient permite la conexion con el backend

  todosCursos() {
    return this.htppClient.get<Curso[]>(this.API)
    .pipe(                                        //Manipular datos
      first(),                                    //Ejecuta la accion al primer resultado
      delay(1000),                                //Espera de 5 segundos
      tap(cursos => console.log(cursos))          //Tap ejecuta la accion para todos, Imprimir los resultados
    );
  }

  guardar(curso: Curso){
    return this.htppClient.post<Curso>(this.API, curso).pipe(first());
  }
}
