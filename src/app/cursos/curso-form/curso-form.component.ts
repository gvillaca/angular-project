import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit, OnDestroy {

  isCursoNovo: boolean;
  curso: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {

    this.isCursoNovo = false;

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = parseInt(params['id']);
        this.curso = this.cursoService.getCursoById(id);

        if (this.curso === null){
          this.isCursoNovo = true;
          this.curso = {};
        }
      }
    );

  }

  addCurso(){
    let idAtual = this.cursoService.getCursos().length + 1;
    this.curso.id = idAtual;
    this.cursoService.addCurso(this.curso);
    this.curso = {};
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
