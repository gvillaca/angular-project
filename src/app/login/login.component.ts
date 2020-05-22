import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../vo/User';
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

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private loginService: LoginService,   
    private router: Router) { }

  ngOnInit(): void {
  }

  autenticarUsuario() {
    this.loginService.login(this.user);
  }

}

