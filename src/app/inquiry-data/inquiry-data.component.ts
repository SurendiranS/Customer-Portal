import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export interface Item {
  DOC_NUMBER: string;
  ITEM_NUMBER: string ;
  MATERIAL: string;
  CREATE_DATE: string;
  SHORT_TEXT:string;
  REQ_QTY:string;
  NET_PRICE:string;
  CURRENCY:string;
} 

@Component({
  selector: 'app-inquiry-data',
  templateUrl: './inquiry-data.component.html',
  styleUrls: ['./inquiry-data.component.css']
})
export class InquiryDataComponent implements OnInit {
  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[]=['DOC_NUMBER','ITEM_NUMBER','MATERIAL','CREATE_DATE','SHORT_TEXT','REQ_QTY','NET_PRICE','CURRENCY'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);
  constructor(private http: HttpClient) { }
  result : any;
  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/inquiry',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    console.log(this.dataSource);
  }
}

