import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient} from '@angular/common/http';

export interface Item {
  VBELN: string;
  ERZET: string ;
  ERDAT: string;
  VKORG: string;
  LFART: string;
  LFDAT_V: string;
  INCO2: string;
  LFUHR: string;
  ARKTX: string;
} 



@Component({
  selector: 'app-list-of-delivery',
  templateUrl: './list-of-delivery.component.html',
  styleUrls: ['./list-of-delivery.component.css']
})
export class ListOfDeliveryComponent implements OnInit {
  ELEMENT_DATA: Item[]=[];
  displayedColumns: string[] = ['VBELN', 'ERZET', 'ERDAT', 'VKORG','LFART','LFDAT_V','INCO2','LFUHR','ARKTX'];
  dataSource =new MatTableDataSource<Item>(this.ELEMENT_DATA);
  constructor(private http: HttpClient) { }
  result : any;
  ngOnInit(): void {
    let res=this.http.post('http://localhost:3000/delivery',undefined);
    res.subscribe(result => this.dataSource.data = result as Item[]);
    // this.dataSource.data.push
    console.log(this.dataSource);
  }

}
