import { DialogoErrorComponent } from '../../../compartido/componentes/dialogo-error/dialogo-error.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Curso } from '../../model/curso';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dsCursos$: Observable<Curso[]>; //Cuando es Observable, colocar $

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private ruta: Router,
    private rutaActual: ActivatedRoute) {
      this.dsCursos$ = this.cursosService.todosCursos()
        .pipe(catchError(error => {
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

  onNuevo(){
    this.ruta.navigate(['nuevo'], {relativeTo: this.rutaActual}); //Para que navegue a esa direccion
  }

  onEditar(curso: Curso){
    this.ruta.navigate(['editar', curso._id], {relativeTo: this.rutaActual}); //Navega a esa direccion con los datos del curso
  }

}
