import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos.routing.module';
import { ListaCursosComponent } from "./lista-cursos/lista-cursos.component";
import { CursoFormComponent } from "./curso-form/curso-form.component";
import { CursoService } from './curso.service';

@NgModule({
  declarations: [
    ListaCursosComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ],
  exports: [
    ListaCursosComponent,
    CursoFormComponent
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
