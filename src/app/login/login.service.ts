import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../vo/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(user: User) {
    this.http.post<User>('http://52.91.139.190/fsapi/users/login', user, httpOptions).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('userLogado', JSON.stringify(obj));
        this.mostrarMenuEmitter.emit(true);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log('erro ao logar');
        this.mostrarMenuEmitter.emit(false);
      }
    );
  }

  usuarioLogado(): boolean {
    if(localStorage.getItem('userLogado')){
      return true;
    }
    return false;
  }

}
