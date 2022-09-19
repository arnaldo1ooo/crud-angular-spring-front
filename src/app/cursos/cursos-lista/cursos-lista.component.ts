import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  @Input() listCursos: Curso[] = [];
  readonly columnasAMostrar = ['_id','nombre', 'categoria', 'acciones'];

  constructor(
    private ruta: Router,
    private rutaActual: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onNuevo(){
    this.ruta.navigate(['nuevo'], {relativeTo: this.rutaActual}); //Para que navegue a esa direccion
  }

}
