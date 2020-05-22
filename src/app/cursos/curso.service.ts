import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  addCurso(curso: any) {
    this.cursos.push(curso);
  }

  private cursos: any[] = [
    {'id': 1, 'nome': 'AngularJS', 'professor': 'Fulano', 'qtdAlunos': 15},
    {'id': 2, 'nome': 'React', 'professor': 'Beltrano', 'qtdAlunos': 10},
    {'id': 3, 'nome': 'Java 14', 'professor': 'Zé', 'qtdAlunos': 50}
  ]

  getCursos(): any[]{
    return this.cursos;
  }

  getCursoById(id: number){
    for (let i=0; i<this.cursos.length; i++){
      let aluno = this.cursos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
