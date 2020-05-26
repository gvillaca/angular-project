import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FornecedorRoutingModule } from "./fornecedor.routing.module";
import { FornecedorService } from './fornecedor.service';
import { ListFornecedorComponent } from './list-fornecedor/list-fornecedor.component';
import { FormFornecedorComponent} from "./form-fornecedor/form-fornecedor.component";
import { FormataCnpjDirective } from '../diretivas/formata-cnpj.directive';
import { FormataDecimalDirective } from '../diretivas/formata-decimal.directive';

@NgModule({
  declarations: [
    ListFornecedorComponent,
    FormFornecedorComponent,
    FormataCnpjDirective,
    FormataDecimalDirective
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule
  ],
  providers: [
    FornecedorService
  ]
})
export class FornecedorModule { }
