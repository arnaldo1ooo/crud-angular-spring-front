import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  formCurso: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private cursoService: CursosService,
    private snackBar: MatSnackBar) {
    this.formCurso = this.formBuilder.group({
      nombre: [null],
      categoria: [null]
    });
  }

  onGuardar() {
    this.cursoService.guardar(this.formCurso.value)
      .subscribe(resultado => console.log(resultado), error => this.onError());
  }

  onCancelar() {

  }

  private onError(){
    this.snackBar.open('Error al guardar curso', '', { duration: 4000 });  //Mensaje cuando da error
  }

  ngOnInit(): void {
  }

}
