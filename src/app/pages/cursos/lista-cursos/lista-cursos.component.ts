import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos: any = [];
  inscricao: Subscription;

  constructor(private service: CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  private getCursos() {
    this.inscricao = this.service.getCursos().subscribe(obj => this.cursos = obj);
  }

  ngDoCheck() {
    this.getCursos();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
