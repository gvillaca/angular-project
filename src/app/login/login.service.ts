import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './vo/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>('http://52.91.139.190/fsapi/users/login', user, httpOptions);
  }

  usuarioLogado(): boolean {
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

}
