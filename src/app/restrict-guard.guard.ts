import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictGuardGuard implements CanActivate {

  constructor(private _authservice:LoginService ,private _router:Router){

  }
  canActivate():boolean{
    if(this._authservice.loggedIn()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false 
    }
  }
  
  
}
