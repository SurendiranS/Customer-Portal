import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../login-credentials';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Customer Portal';
  credentialsModel = new LoginCredentials('','');
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.credentialsModel);
  }
}
