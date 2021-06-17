import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  output:any;
  u=new FormGroup({
    KUNNR: new FormControl(''),
    LAND1: new FormControl(''),
    NAME1: new FormControl(''),
    NAME2: new FormControl(''),
    ORT01: new FormControl(''),
    PSTLZ: new FormControl(''),
    REGIO: new FormControl(''),
    STRAS: new FormControl(''),
    TELF1: new FormControl('')
  })
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.u.value);
    // this.http.post('http://localhost:3000/CustomerDetailsUpdate', this.u.value).subscribe(result => {
    //   console.log(result);
    //   this.output = result;
    //   this.output = this.output['UPDATESTATUS'];
    //   console.log(this.output);
    //   if (this.output == "UPDATED") {
    //     alert("Updated Successfully")
    //   }
    //   else {
    //     alert("Updation Failed ")
    //   }
    // });
  }

}


// {
//   "RETURN": {
//       "TYPE": "",
//       "ID": "",
//       "NUMBER": "000",
//       "MESSAGE": "",
//       "LOG_NO": "",
//       "LOG_MSG_NO": "000000",
//       "MESSAGE_V1": "",
//       "MESSAGE_V2": "",
//       "MESSAGE_V3": "",
//       "MESSAGE_V4": "",
//       "PARAMETER": "",
//       "ROW": 0,
//       "FIELD": "",
//       "SYSTEM": ""
//   },
//   "UPDATESTATUS": "UPDATED"
// }