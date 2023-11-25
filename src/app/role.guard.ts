import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
    let Role=localStorage.getItem("userType");
    if(Role=="Admin"){
      return true;
    }
    alert("You don't have admin rights")
    return false;
  }
  
}
