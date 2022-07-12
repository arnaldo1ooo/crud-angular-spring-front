import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  formCurso: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCurso = this.formBuilder.group({
      nombre: [null],
      categoria: [null]
    });
   }

   onGuardar(){

   }

   onCancelar(){

   }

  ngOnInit(): void {
  }

}
