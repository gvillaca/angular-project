import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CursoFormComponent } from "./curso-form/curso-form.component";


const routes: Routes = [
  { path: '', component: ListaCursosComponent, children: [
    { path: 'novo', component: CursoFormComponent},
    { path: ':id', component: CursoFormComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
