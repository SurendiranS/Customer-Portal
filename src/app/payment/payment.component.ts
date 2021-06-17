import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient} from '@angular/common/http';


export interface Item {
  COMPANY: string;
  CUSTOMEER: string ;
  FISO: string;
  DOCUMENT_NO: string;
  ITEM: string;
  PURCHASING_DATE: string;
  DOCUMENT_DATE: string;
  ENTRY_DATE: string;
  CURRENCY: string;
  LOCAL_CURRENCY:string;
  LOCAL_AMOUNT: string;
  AMOUNT_DECC: string;
  ITEM_TEXT: string;
  BLINE_DATE: string;
} 


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[] = ['COMPANY', 'CUSTOMEER', 'FISO', 'DOCUMENT_NO','ITEM','PURCHASING_DATE','DOCUMENT_DATE',
  'ENTRY_DATE','CURRENCY','LOCAL_CURRENCY','LOCAL_AMOUNT','AMOUNT_DECC','ITEM_TEXT','BLINE_DATE'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);
  result : any;
  // var time = new Date();
  // time = 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/payment',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    // this.dataSource.data.push
    console.log(this.dataSource);
  }
}
