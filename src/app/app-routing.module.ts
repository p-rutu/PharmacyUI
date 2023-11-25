import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmindrugsComponent } from './admindrugs/admindrugs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { RestrictGuardGuard } from './restrict-guard.guard';
import { RoleGuard } from './role.guard';
import { SalesComponent } from './sales/sales.component';
import { SignupComponent } from './signup/signup.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UserAllOrdersComponent } from './user-all-orders/user-all-orders.component';
import { UsercartComponent } from './usercart/usercart.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"user",component:UserdashboardComponent,canActivate:[RestrictGuardGuard]},
  {path:"admin",component:AdmindashboardComponent,canActivate:[RoleGuard]},
  {path:"supplier",component:SupplierComponent,canActivate:[RoleGuard]},
  {path:"admindrug",component:AdmindrugsComponent,canActivate:[RoleGuard]},
  {path:"sales",component:SalesComponent,canActivate:[RestrictGuardGuard]},
  {path:"adminorders",component:OrderdetailsComponent,canActivate:[RoleGuard]},

  {path:"Buy",component:UsercartComponent,canActivate:[RestrictGuardGuard]},
  
  {path:"mycart",component:UserAllOrdersComponent,canActivate:[RestrictGuardGuard]}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
