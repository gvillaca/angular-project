import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
    private service: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.isCursoNovo = false;

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = parseInt(params['id']);
        if (id >= 0) {
          this.curso = this.service.getCursoById(id);

          if (!this.curso) {
            this.isCursoNovo = true;
            this.curso = {};
          }
        } else {
          this.isCursoNovo = true;
          this.curso = {};
        }
      }
    );

  }

  addCurso() {
    // let idAtual = this.service.getCursos().length + 1;
    // this.curso.id = idAtual;
    this.service.addCurso(this.curso);
    this.curso = {};
    this.router.navigateByUrl('/cursos');
  }

  editCurso() {
    this.service.editCurso(this.curso);
    this.router.navigateByUrl('/cursos');
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
