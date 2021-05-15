import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private logged= new BehaviorSubject<boolean>(false);
  public loggedOber = this.logged.asObservable();
  constructor() { }

  login(){
    this.logged.next(true);
  }
  logout(){
    this.logged.next(false);
  }
}
