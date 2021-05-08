import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginPageComponent} from './login-page/login-page.component';
import {CustomerProfileComponent} from './customer-profile/customer-profile.component';
import {InquiryDataComponent} from './inquiry-data/inquiry-data.component';
import {SaleOrderdataComponent} from './sale-orderdata/sale-orderdata.component';
import {ListOfDeliveryComponent} from './list-of-delivery/list-of-delivery.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {CreditDebitComponent} from './credit-debit/credit-debit.component'
import {PaymentComponent} from './payment/payment.component'
import {OverallSalesComponent} from './overall-sales/overall-sales.component'
import {MasterUploadComponent} from './master-upload/master-upload.component'
import {CustomerProfileViewComponent} from './customer-profile-view/customer-profile-view.component'

const routes: Routes = [
  
  {path:'', component:LoginPageComponent},
  {path:'profile', component:CustomerProfileComponent},
  {path:'inquiry', component:InquiryDataComponent},
  {path:'sale', component:SaleOrderdataComponent},
  {path:'delivery', component:ListOfDeliveryComponent},
  {path:'list', component:ListOfDeliveryComponent},
  {path:'credit-debit',component:CreditDebitComponent},
  {path:'payment-aging',component:PaymentComponent},
  {path:'overallSales',component:OverallSalesComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'master-upload',component:MasterUploadComponent},
  {path:'profile-view', component:CustomerProfileViewComponent},
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
