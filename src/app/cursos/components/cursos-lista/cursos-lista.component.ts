import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Curso } from '../../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  @Input() listCursos: Curso[] = [];
  @Output() nuevo = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);
  @Output() eliminar = new EventEmitter(false);

  readonly columnasAMostrar = ['_id','nombre', 'categoria', 'acciones'];

  constructor(
    private ruta: Router,
    private rutaActual: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onNuevo(){
    this.nuevo.emit(true);
  }

  onEditar(curso: Curso){
    this.editar.emit(curso);
  }

  onEliminar(curso: Curso) {
    this.eliminar.emit(curso);
  }
}
