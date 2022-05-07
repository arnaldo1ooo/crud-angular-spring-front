import { Observable } from 'rxjs';
import { CursosService } from './../services/cursos.service';
import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dsCursos$: Observable<Curso[]>; //Cuando es Observable, colocar $
  columnasAMostrar = [ 'nombre', 'categoria' ];

  constructor(private cursosService: CursosService) {
    this.dsCursos$ = this.cursosService.todosCursos();
  }

  ngOnInit(): void {

  }

}
