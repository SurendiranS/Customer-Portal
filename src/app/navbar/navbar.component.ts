import { Component, Input, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged=false;

  constructor(private share:AppService) { }

  ngOnInit(): void {
    this.share.loggedOber.subscribe(x => this.logged = x);
  }

  logout(){
    this.share.logout();
  }
}
