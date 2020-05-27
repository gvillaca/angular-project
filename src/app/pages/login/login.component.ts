import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  erros: string[];
  submit: boolean;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.submit = false;

    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  autenticarUsuario() {
    if (this.loginForm.valid) {
      this.submit = false;
      this.loginService.login(this.loginForm.value);
    } else {
      this.submit = true;
      Object.entries(this.loginForm.controls).forEach(item => {
        if(item[1].errors){
          this.getMensagensValidacao(item[1].errors)
        }
      });
      console.log('Form inválido');
    }
  }

  private getMensagensValidacao(erro: ValidationErrors){
      switch(erro){
        case erro['required']: {
          this.erros.push('Por favor preencher todos os campos obrigatórios!');
        }
        case erro['email']: {
          this.erros.push('E-mail inválido!');
        }
        case erro['minlength']: {
          this.erros.push('Senha inválida!');
        }
      }
  }

}

