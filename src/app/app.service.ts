import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private custid = new BehaviorSubject<string>(" ");
  private logged= new BehaviorSubject<boolean>(true);
  public loggedOber = this.logged.asObservable();
  public custidOber = this.custid.asObservable();
  constructor() { }

  login(){
    this.logged.next(true);
  }
  logout(){
    this.logged.next(false);
  }
  custidUpdate(t:string){
    this.custid.next(t);
  }
}
