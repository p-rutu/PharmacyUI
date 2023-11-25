import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AdmindrugsComponent } from './admindrugs/admindrugs.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { UsercartComponent } from './usercart/usercart.component';
import { ToastrModule } from 'ngx-toastr';
import { RestrictGuardGuard } from './restrict-guard.guard';
import { NgxPrintModule } from 'ngx-print';
import { FilterPipe } from './pipes/filter.pipe';
import { SupplierPipe } from './pipes/supplier.pipe';
import { UserAllOrdersComponent } from './user-all-orders/user-all-orders.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  
  declarations: [
    
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    SupplierComponent,
    AdmindrugsComponent,
    OrderdetailsComponent,
    UsercartComponent,
    FilterPipe,
    SupplierPipe,
    UserAllOrdersComponent,
    SalesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule,
    BrowserAnimationsModule,
    
    ToastrModule.forRoot()
    
  ],
  providers: [RestrictGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
