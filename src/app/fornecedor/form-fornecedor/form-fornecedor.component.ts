import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-form-fornecedor',
  templateUrl: './form-fornecedor.component.html',
  styleUrls: ['./form-fornecedor.component.css']
})
export class FormFornecedorComponent implements OnInit, OnDestroy {

  isFornecedorNovo: boolean;
  fornecedor: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: FornecedorService
  ) { }

  ngOnInit(): void {

    this.isFornecedorNovo = false;

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = parseInt(params['id']);
        this.fornecedor = this.service.getFornecedorById(id);

        if (this.fornecedor === null) {
          this.isFornecedorNovo = true;
          this.fornecedor = {};
        }
      }
    );
  }

  addFornecedor() {
    let idAtual = this.service.getFornecedores().length + 1;
    this.fornecedor.id = idAtual;
    this.service.addFornecedor(this.fornecedor);
    this.fornecedor = {};
  }

  editFornecedor() {
    this.service.editFornecedor(this.fornecedor);
    this.fornecedor = {};
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
