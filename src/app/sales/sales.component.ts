import { Component, OnInit } from '@angular/core';
import { Drug } from '../models/drug.model';
import { FOrder } from '../models/FOrder.model';
import { PharmacyService } from '../service/pharmacy.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  drugk:Drug[]=[]
  Forder:FOrder[]=[]
  TotalQuantity:number=0;
  TotalPrices:number=0;
  constructor(private pharmacy:PharmacyService) {
    this.getAllDrugs();
    this.getAllOrders();
   }

  ngOnInit(): void {
  }
  getAllDrugs(){
    this.pharmacy.getalldrugs()
    .subscribe(
      response=>{
        this.drugk=response;
        console.log(response);
      }

    );
  }
  getAllOrders(){
    this.pharmacy.getFinalDb().subscribe(Response=>{this.Forder=Response})
  }



  TotalQuant(id:number){
    let y=0;
    for (let x of this.Forder){
      if(x.drugId==id){
        y+=x.quantity
        
      }
    }
    return y
    
  }
  TotalAmount(xd:number){
    let y=0
    for (let x of this.Forder){
      if(x.drugId==xd){
       
        y+=x.price
      }
    }
    return y
  }
}
