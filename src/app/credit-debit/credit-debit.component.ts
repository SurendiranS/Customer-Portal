// import { GlobalPositionStrategy } from '@angular/cdk/overlay';
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
  selector: 'app-credit-debit',
  templateUrl: './credit-debit.component.html',
  styleUrls: ['./credit-debit.component.css']
})
export class CreditDebitComponent implements OnInit {
  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[]=['GJAHR','AUGDT','AUGBL','PSWBT','PSWSL'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);

  constructor(private http: HttpClient) { }
  result : any;
  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/debit',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    // this.dataSource.data.push
    console.log(this.dataSource);
  }
}


// "GJAHR": 2015,
// "AUGDT": "0000-00-00",
// "AUGBL": "",
// "PSWBT": "297000.00",
// "PSWSL": "SAR"

// Fiscal Year
// Clearing Date
// Doc No of clr doc
// Amt for Upt in GL 
// Upt currency for GL 