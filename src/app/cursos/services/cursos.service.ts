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

  cargarPorId(id: string){
    return this.htppClient.get<Curso>(`${this.API}/${id}`);
  }

  guardar(curso: Partial<Curso>){ //Se usa Partial cuando se espera que no reciba todos los datos de Curso
    if(curso._id){
      //console.log('Curso modificado!');
      return this.actualizar(curso);
    }

    //console.log('Curso creado!');
    return this.crear(curso);
  }

  private crear(curso: Partial<Curso>){
    return this.htppClient.post<Curso>(this.API, curso).pipe(first());
  }

  private actualizar(curso: Partial<Curso>){
    return this.htppClient.put<Curso>(`${this.API}/${curso._id}`, curso).pipe(first());
  }

  eliminar(id: string) {
    return this.htppClient.delete(`${this.API}/${id}`).pipe(first());
  }

  inactivar(curso: Partial<Curso>) {
    return this.htppClient.put<Curso>(`${this.API}/inactivar/${curso._id}`, curso).pipe(first());
  }
}
