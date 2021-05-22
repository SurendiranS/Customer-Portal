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
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


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
    this.dataSource.data.push
    console.log(this.dataSource);
  }

}
