import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged = false;
  custid = "";
  constructor(private share: AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.share.loggedOber.subscribe(x => this.logged = x);
    this.share.custidOber.subscribe(x=>this.custid=x);
    console.log(this.custid);
  }

  logout() {
    this.share.logout();
    this.router.navigate(['/']);
  }
}
