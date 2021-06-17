import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient} from '@angular/common/http';

export interface Item {
  GJAHR: string;
  AUGDT: string ;
  AUGBL: string;
  PSWBT: string;
  PSWSL: string;
} 

@Component({
  selector: 'app-credit-credit',
  templateUrl: './credit-credit.component.html',
  styleUrls: ['./credit-credit.component.css']
})
export class CreditCreditComponent implements OnInit {
  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[]=['GJAHR','AUGDT','AUGBL','PSWBT','PSWSL'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);
  constructor(private http: HttpClient) { }
  result : any;
  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/credit',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    // this.dataSource.data.push
    console.log(this.dataSource);
  }
}
