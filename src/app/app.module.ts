import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {MatTreeModule} from '@angular/material/tree'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InquiryDataComponent } from './inquiry-data/inquiry-data.component';
import { SaleOrderdataComponent } from './sale-orderdata/sale-orderdata.component';
import { ListOfDeliveryComponent } from './list-of-delivery/list-of-delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditDebitComponent } from './credit-debit/credit-debit.component';
import { OverallSalesComponent } from './overall-sales/overall-sales.component';
import { MasterUploadComponent } from './master-upload/master-upload.component';
import { CustomerProfileViewComponent } from './customer-profile-view/customer-profile-view.component';
import { CreditCreditComponent } from './credit-credit/credit-credit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CustomerProfileComponent,
    NavbarComponent,
    InquiryDataComponent,
    SaleOrderdataComponent,
    ListOfDeliveryComponent,
    InvoiceComponent,
    PaymentComponent,
    CreditDebitComponent,
    OverallSalesComponent,
    MasterUploadComponent,
    CustomerProfileViewComponent,
    CreditCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
