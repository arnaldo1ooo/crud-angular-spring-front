import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = '/assets/cursos.json';

  constructor(private htppClient: HttpClient) { } //El httpClient permite la conexion con el backend

  todosCursos() {
    return this.htppClient.get<Curso[]>(this.API)
    .pipe(                                        //Manipular datos
      first(),                                    //Primer resultado
      tap(cursos => console.log(cursos))          //Imprimir los resultados
    );
  }
}
