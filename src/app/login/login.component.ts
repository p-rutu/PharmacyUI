import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { LoginService } from '../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../models/Doctor.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  DoctorDetails:Doctor={
    userId: 0,
    userName: '',
    userAddress: '',
    userContact: 0,
    userEmail: '',
    userPassword: ''
  };

  formModel={
    role: "",
    emailId:"",
    password:""
  }
  login: { role: string; password: string; emailId: string; };
  constructor(private loginService: LoginService,private toastr: ToastrService,private router:Router) { }

  userObject:Doctor={
    userId: 0,
    userName: '',
    userAddress: '',
    userContact: 0,
    userEmail: '',
    userPassword: ''
  };
  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.login = {
      role:'',
      password: '',
      emailId: '',
    };
  }

  OnSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.role);
    if (form.value.role == 'Doctor') {
      this.loginService
        .LoginDoctor(form.value)
        .subscribe((data: any) => {
          console.log(data);
          if(data=="User Not Found"){
            this.toastr.error('Check your Credentials and Role');
          }
          else{
            this.toastr.success('Doctor Login successful');
          localStorage.setItem('token',data)
          localStorage.setItem('userType','Doctor')
          this.getIdbyEmail(form.value.emailId);
          this.router.navigate(['/user']);
          }
        
        });
    } else if (form.value.role == 'Admin') {
      this.loginService.LoginAdmin(form.value).subscribe((data: any) => {
        if(data=="User Not Found"){
          this.toastr.error('Check your Credentials and Role');
        }
        else{
          console.log(data);

        this.toastr.success('Admin login successful');
        localStorage.setItem('token',data)
        localStorage.setItem('userType','Admin')
        this.router.navigate(['/admin']);
        
        }
      });
    } else {
      this.toastr.error('Check your Credentials and Role');
    }
  }
   
  getIdbyEmail(email:string){
    this.loginService.getUserByEmail(email).subscribe
    (
      response=>{
        console.log(response);
        this.DoctorDetails.userId=response.userId;
        this.DoctorDetails.userName=response.userName;
        this.DoctorDetails.userAddress=response.userAddress;
        this.DoctorDetails.userContact=response.userContact;
        this.DoctorDetails.userAddress=response.userAddress;
        this.DoctorDetails.userEmail=response.userEmail;
        console.log(this.DoctorDetails);
        localStorage.setItem('userId',JSON.stringify(response.userId));
        localStorage.setItem('userName',JSON.stringify(response.userName));
        localStorage.setItem('userEmail',JSON.stringify(response.userEmail));
       

      }
    )
  }


}
function email(email: any, string: any) {
  throw new Error('Function not implemented.');
}

function userid(userid: any, arg1: string) {
  throw new Error('Function not implemented.');
}

