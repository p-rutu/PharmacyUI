import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../models/Doctor.model';
import { Drug } from '../models/drug.model';
import { FOrder } from '../models/FOrder.model';
import { Order } from '../models/order.model';
import { LoginService } from '../service/login.service';
import { MessageService } from '../service/message.service';
import { PharmacyService } from '../service/pharmacy.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  DrugDetail: Drug[] = [];
  orderEmail:FOrder[]=[];
  Und:number;
  TotalPrice:number=0;
  drugk:Drug;
drugp:Drug={
  drugId: 0,
  drugName: "",
  quantity: 0,
  price: 0,
  expiryDate: 0,
  supplierId: 0
}


forder:FOrder={
  orderId: 0,
  userId: 0,
  userName: '',
  drugId: 0,
  drugName: '',
  quantity: 0,
  totalPrice: 0,
  drugExp: 0,
  orderDate: "",
  userEmail: '',
  price: 0,
  isPicked: ''
}

public quant=1;
  UED: string=JSON.parse(localStorage.getItem('userName')|| '{}');
  UId: number=JSON.parse(localStorage.getItem('userId')|| '{}');
  UEmail:string=JSON.parse(localStorage.getItem('userEmail')|| '{}');
  constructor(private service :MessageService,private toastr: ToastrService,private pharmacyService:PharmacyService,private loginService:LoginService,private msgservice:MessageService) {
      this.GetDrugData();
   }

  
  

  
  ngOnInit(): void {
    
  }
  SendMail(lst:FOrder[]){
    return this.pharmacyService.OrderPlacedEmail(lst)
    .subscribe(Response=>{
      console.log(Response);
    });
  }

  AddOrders(druglist :any){
    var len=druglist.length;
    for(var x of druglist){
          this.forder.userId=this.UId;
          this.forder.userName=this.UED;
          this.forder.userEmail=this.UEmail;
          
          this.forder.price=x.price;
          this.forder.drugId=x.drugId;
          this.forder.quantity=x.quantity;
          this.forder.totalPrice=x.price*x.quantity      ;
          this.forder.drugName=x.drugName;
          this.forder.drugExp=x.expiryDate;
          this.forder.orderDate=new Date().toISOString();
          this.forder.isPicked="Hold";
          console.log(this.orderEmail)
          this.pharmacyService.postFinalDb(this.forder).subscribe(
            Response=>{
              console.log(Response)
              this.orderEmail.push(Response);
              if (this.orderEmail.length == len) {

                this.SendMail(this.orderEmail);
              }
            }
          );
          
          

          function delay(time:any){
            return new Promise((resolve)=>setTimeout(resolve,time));
          }
          delay(4000).then(()=> console.log('ran after 1 second1 passed'));
    }
   
    this.toastr.success('Your order was placed');
    this.toastr.success('Mail sent - Order details');

  }
  GetDrugData() {
    this.DrugDetail = this.msgservice.getMessage();
    console.log(this.DrugDetail);
  }


  TotalAmount(){
    for (let x of this.DrugDetail){
      this.TotalPrice+=x.quantity*x.price;
    }
  }
  
}


