import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged=true;

  constructor() { }
  logout(){
    this.logged=false;
  }
  login(){
    this.logged=true;
  }

  ngOnInit(): void {
  }

}
