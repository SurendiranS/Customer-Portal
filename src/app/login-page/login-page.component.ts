import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../login-credentials';
import {AppService} from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Customer Portal';
  credentialsModel = new LoginCredentials('','');
  constructor(private share: AppService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.credentialsModel);
    this.share.login();
    this.router.navigate(['/inquiry']);
  }
}
