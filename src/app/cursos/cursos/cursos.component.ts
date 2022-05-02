import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dsCursos: Curso[] = [
    { _id: '1', nombre: 'Angular', categoria: 'Front-end' }
  ];
  columnasAMostrar = [ 'nombre', 'categoria' ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
