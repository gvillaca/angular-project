import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './vo/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };

  constructor(
    private loginService: LoginService,   
    private router: Router) { }

  ngOnInit(): void {
  }

  autenticarUsuario() {
    this.loginService.login(this.user).subscribe(
      obj => {
        console.log('logou com sucesso');
        localStorage.setItem('token', obj.token);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log('erro ao logar');
      }
    );
  }

}

