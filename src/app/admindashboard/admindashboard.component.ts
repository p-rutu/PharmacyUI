import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public _authservice:LoginService) { }

  ngOnInit(): void {
  }

}
