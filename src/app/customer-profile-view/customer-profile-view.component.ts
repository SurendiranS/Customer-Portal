import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-customer-profile-view',
  templateUrl: './customer-profile-view.component.html',
  styleUrls: ['./customer-profile-view.component.css']
})
export class CustomerProfileViewComponent implements OnInit {
  constructor(private http: HttpClient) { }
  output:any;
  ngOnInit(): void {
    this.http.post('http://localhost:3000/getCustomerDetails', undefined).subscribe(result => {
      console.log(result);
      this.output = result;
      console.log(this.output);
    });
  }
}

// {
//   "OUTPUT_USER_DETAILS_TABLE": {
//       "KUNNR": "IN",   ----> Customer Number
//       "LAND1": "IN",    --> Country Key
//       "NAME1": "RAM",   --> First Name
//       "NAME2": "KUMAR",  --> Last Name
//       "ORT01": "CHENNAI", ---> city
//       "PSTLZ": 600044,    --> Postal Code
//       "REGIO": "TN",       ---> Region
//       "SORTL": "",
//       "STRAS": "TN",       --> House no
//       "TELF1": 9876542344   --> phn no
//   }
// }