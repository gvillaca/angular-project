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
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaCampoValido(campo) && this.submit
    }
  }

  private verificaCampoValido(campo: string) {
    return this.getFormFCampo(campo).invalid;
  }

  hasErrors(campo: string) {
    return this.getFormFCampo(campo).errors && this.submit;
  }

  private getFormFCampo(campo: string) {
    return this.loginForm.get(campo);
  }

  getErro(campo: string) {
    return this.getMensagensValidacao(campo);
  }

  private getMensagensValidacao(campo: string) {
    let erro = '';
    Object.keys(this.getFormFCampo(campo).errors).forEach(e => {
      switch (e) {
        case 'required': {
          erro =  'O campo ' + campo + ' é obrigatório!';
          break;
        }
        case 'email': {
          erro =  'E-mail inválido!';
          break;
        }
        case 'minlength': {
          erro =  'Senha inválida!';
          break;
        }
      }
    });
    return erro;
  }

}

