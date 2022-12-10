import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import {
  DialogoConfirmacionComponent,
} from 'src/app/compartido/componentes/dialogo-confirmacion/dialogo-confirmacion/dialogo-confirmacion.component';

import { DialogoErrorComponent } from '../../../compartido/componentes/dialogo-error/dialogo-error.component';
import { Curso } from '../../model/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dsCursos$: Observable<Curso[]>; //Cuando es Observable, colocar $
  cursos$: Observable<Curso[]> | null = null;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private ruta: Router,
    private rutaActual: ActivatedRoute,
    private alertaSnackBar: MatSnackBar) {
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

  refrescar() {
    this.cursos$ = this.cursosService.todosCursos()
      .pipe(
        catchError(error => {
          this.onError('Error al cargar cursos.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(DialogoErrorComponent, {
      data: errorMsg
    });
  }

  onNuevo() {
    this.ruta.navigate(['nuevo'], {relativeTo: this.rutaActual}); //Para que navegue a esa direccion
  }

  onEditar(curso: Curso) {
    this.ruta.navigate(['editar', curso._id], {relativeTo: this.rutaActual}); //Navega a esa direccion con los datos del curso
  }

  onEliminar(curso: Curso) {
    const dialogoRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: '¿Seguro que desea eliminar este curso?',
    });

    dialogoRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.cursosService.eliminar(curso._id).subscribe(
          () => {
            this.refrescar();
            this.alertaSnackBar.open('Curso eliminado con suceso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Error al intentar eliminar curso.')
        );
      }
    });
  }

  onInactivar(curso: Curso) {
    const dialogoRef = this.dialog.open(DialogoConfirmacionComponent, {
      data: '¿Seguro que desea inactivar este curso?',
    });

    dialogoRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.cursosService.inactivar(curso).subscribe(
          () => {
            this.refrescar();
            this.alertaSnackBar.open('Curso inactivado con exito!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Error al intentar inactivar curso.')
        );
      }
    });

  }


}
