import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url: string = "http://localhost:3000/cursos";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // private cursos: any[] = [
  //   { 'id': 1, 'nome': 'AngularJS', 'professor': 'Fulano', 'qtdAlunos': 15 },
  //   { 'id': 2, 'nome': 'React', 'professor': 'Beltrano', 'qtdAlunos': 10 },
  //   { 'id': 3, 'nome': 'Java 14', 'professor': 'Zé', 'qtdAlunos': 50 }
  // ]

  constructor(private http: HttpClient) { }

  getCursos() {
    return this.http.get(url);
  }

  addCurso(curso: any) {
    this.http.post(url, curso).subscribe(ok => ok);
    // this.cursos.push(curso);
  }

  editCurso(curso: any) {
    this.http.put(url + '/' + curso.id, curso);
    // let indexAlterado = this.getIndexItemById(curso.id);
    // this.cursos.splice(indexAlterado, 1, curso);
  }

  deleteCurso(id: number) {
    this.http.delete(url + '/' + id);
  }

  getCursoById(id: number) {
    return this.http.get(url + '/' + id);
  }

  // private getIndexItemById(id: number): number {
  //   return this.cursos.findIndex(i => i.id == id);
  // }

}
