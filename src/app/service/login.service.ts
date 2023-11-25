import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Doctor } from '../models/Doctor.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseUrl='http://localhost:5000/api/';

  constructor(private http:HttpClient,private _router:Router) { }

  LoginAdmin( admin: Login){
    return this.http.post(this.baseUrl+'Login',admin,{responseType:'text'});
  }
  LoginDoctor( doctor: Login){
    return this.http.post(this.baseUrl+'Login',doctor,{responseType:'text'});
  }

  registerUser(doctor:Doctor):Observable<Doctor>{
    return this.http.post<Doctor>(this.baseUrl+'Users',doctor);
  }

  loggedIn(){
    return !!localStorage.getItem('token')

  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/home']);
  }

  getUserByEmail(emailId: string|null){
    return this.http.get<Doctor>(this.baseUrl+'Users/GetUserByEmail?email='+emailId);
  }
}




