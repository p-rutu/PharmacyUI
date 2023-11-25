import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../models/Doctor.model';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  doctor: Doctor={
    userId: 0,
    userName: '',
    userAddress: '',
    userContact: 0,
    userEmail: '',
    userPassword: ''
  }

  constructor(
    private doctorsignupservice: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

   resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.doctor = {
      userId: 0,
    userName: '',
    userAddress: '',
    userContact: 0,
    userEmail: '',
    userPassword: ''
    };
  }


  ngOnInit(): void {
    this.resetForm();

  }

  

  RedirectToLogin() {
    this.router.navigate(['/login']);
  }

  OnSubmit(form: NgForm) {
    this.doctorsignupservice.registerUser(form.value).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.resetForm(form);

        this.toastr.success('User registration successful');
        this.RedirectToLogin();
      }
    });
  }
}
