import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  formCurso = this.formBuilder.group({
    _id: [''],
    nombre: [''],
    categoria: ['']
    });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private cursoService: CursosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private ruta: ActivatedRoute) {

  }

  ngOnInit(): void {
    const curso: Curso = this.ruta.snapshot.data['curso'];  //Obtiene el objeto curso del resolver
    //console.log(curso);

    this.formCurso.setValue({ //Setamos los datos del curso para que aparezca al editar
      _id: curso._id,
      nombre: curso.nombre,
      categoria: curso.categoria
     });
  }

  onGuardar() {
    this.cursoService.guardar(this.formCurso.value)
      .subscribe(resultado => this.onExito(), error => this.onError());
  }

  onCancelar() {
    this.location.back(); //Para que retroceda de pagina
  }

  private onExito() {
    this.snackBar.open('Curso guardado con exito!', '', { duration: 4000 });  //Mensaje cuando salva correctamente
    this.onCancelar(); //Para que vuelva atras
  }

  private onError() {
    this.snackBar.open('Error al guardar curso', '', { duration: 4000 });  //Mensaje cuando da error
  }

}
