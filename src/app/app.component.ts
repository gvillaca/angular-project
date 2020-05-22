import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  canShow: boolean;
  @Input() userName: string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userLogado')){
      this.userName = JSON.parse(localStorage.getItem('userLogado')).user.name;
      this.canShow = true;
    } else {
      this.loginService.mostrarMenuEmitter.subscribe(
        (canShow: boolean) => {
          this.canShow = canShow;
          if(canShow){
            this.userName = JSON.parse(localStorage.getItem('userLogado')).user.name;
          }
        }
      );
    }
  }

}
