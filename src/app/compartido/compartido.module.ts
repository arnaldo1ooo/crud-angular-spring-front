import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogoErrorComponent } from './componentes/dialogo-error/dialogo-error.component';
import { MaterialModulosModule } from './material-modulos/material-modulos.module';



@NgModule({
  declarations: [
    DialogoErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModulosModule
  ],
  exports: [DialogoErrorComponent]
})
export class CompartidoModule { }
