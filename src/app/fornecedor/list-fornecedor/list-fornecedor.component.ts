import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-list-fornecedor',
  templateUrl: './list-fornecedor.component.html',
  styleUrls: ['./list-fornecedor.component.css']
})
export class ListFornecedorComponent implements OnInit {

  fornecedores: any[];

  constructor(private service:FornecedorService) { }

  ngOnInit(): void {
    this.fornecedores = this.service.getFornecedores();
  }

}
