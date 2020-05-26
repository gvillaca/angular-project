import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: any[] = [
    { 'id': 1, 'nome': 'AngularJS', 'professor': 'Fulano', 'qtdAlunos': 15 },
    { 'id': 2, 'nome': 'React', 'professor': 'Beltrano', 'qtdAlunos': 10 },
    { 'id': 3, 'nome': 'Java 14', 'professor': 'Zé', 'qtdAlunos': 50 }
  ]

  getCursos(): any[] {
    return this.cursos;
  }

  addCurso(curso: any) {
    this.cursos.push(curso);
  }

  editCurso(curso: any) {
    let indexAlterado = this.getIndexItemById(curso.id);
    this.cursos.splice(indexAlterado, 1, curso);
  }

  getCursoById(id: number): any {
    return Object.assign({}, this.cursos[this.getIndexItemById(id)]);
  }

  private getIndexItemById(id: number): number {
    return this.cursos.findIndex(i => i.id == id);
  }

  constructor() { }
}
