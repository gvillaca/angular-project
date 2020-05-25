import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFornecedorComponent } from './list-fornecedor/list-fornecedor.component';
import { FormFornecedorComponent } from './form-fornecedor/form-fornecedor.component';


const routes: Routes = [
  { path: '', component: ListFornecedorComponent, children: [
    { path: 'novo', component: FormFornecedorComponent},
    { path: ':id', component: FormFornecedorComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule { }
