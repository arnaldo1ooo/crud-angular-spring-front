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
      delay(100),                                //Espera de x segundos
      tap(cursos => console.log(cursos))          //Tap ejecuta la accion para todos, Imprimir los resultados
    );
  }

  guardar(curso: Partial<Curso>){ //Se usa Partial cuando se espera que no reciba todos los datos de Curso
    return this.htppClient.post<Curso>(this.API, curso).pipe(first());
  }

  cargarPorId(id: string){
    return this.htppClient.get<Curso>(`${this.API}/${id}`);
  }
}
