import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private htppClient: HttpClient) { } //El httpClient permite la conexion con el backend

  todosCursos(): Curso[] {
    return [
      { _id: '1', nombre: 'Angular', categoria: 'Front-end' }
    ];
  }
}
