import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private fornecedores: any[] = [
    { 'id': 1, 'nome': 'Fulano', 'cnpj': '83226522000133', 'saldo': 1500.00 },
    { 'id': 2, 'nome': 'Beltrano', 'cnpj': '16322545000245', 'saldo': 10000.00 },
    { 'id': 3, 'nome': 'Zé', 'cnpj': '12345678000399', 'saldo': 50000.00 }
  ]

  getFornecedores(): any[] {
    return this.fornecedores;
  }

  addFornecedor(fornecedor: any) {
    this.fornecedores.push(fornecedor);
  }

  editFornecedor(fornecedor: any) {
    let indexAlterado = this.getIndexItemById(fornecedor.id);
    this.fornecedores.splice(indexAlterado, 1, fornecedor);
  }

  getFornecedorById(id: number): any {
    return Object.assign({}, this.fornecedores[this.getIndexItemById(id)]);
  }

  private getIndexItemById(id: number): number {
    return this.fornecedores.findIndex(i => i.id == id);
  }

  constructor() { }
}
