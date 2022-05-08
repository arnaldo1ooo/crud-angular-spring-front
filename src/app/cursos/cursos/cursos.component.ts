import { DialogoErrorComponent } from './../../compartido/componentes/dialogo-error/dialogo-error.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Curso } from './../model/curso';
import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dsCursos$: Observable<Curso[]>; //Cuando es Observable, colocar $
  columnasAMostrar = ['nombre', 'categoria'];

  constructor(
      private cursosService: CursosService,
      public dialog: MatDialog
    ) {
    this.dsCursos$ = this.cursosService.todosCursos()
      .pipe(  //Tratamiento de errores
        catchError(error => {
          this.abrirDialogoError('Error al cargar lista de Cursos');
          return of([]) //Retorna un array vacio para detener el spinner cuando hay error
        })
      );
  }

  abrirDialogoError(msgError: string) {
    this.dialog.open(DialogoErrorComponent, { data: msgError });
  }

  ngOnInit(): void {

  }

}
