import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../login-credentials';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'
import {HttpClient} from '@angular/common/http';

@Component({ 
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Customer Portal';
  credentialsModel = new LoginCredentials('', '');
  output:any;
  custid:any;
  f=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
 
  constructor(private share: AppService, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
  }
 
  onSubmit() {
    console.log(this.f.value);
    this.http.post('http://localhost:3000/login', this.f.value).subscribe(result => {
      console.log(result);
      this.output = result;
      this.output = this.output['BAPIRETURN'];
      this.output = this.output['TYPECODE'];
      console.log(this.output);
      if (this.output == "S") {
        this.share.custidUpdate(this.f.value.username);
        this.share.login();
        this.router.navigate(['/profile-view']);
      }
      else {
        alert("Invalid Login. Check Your Credentials")
      }
    });
  }
}


//KC#01int%^&