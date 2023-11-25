import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Drug } from '../models/drug.model';
import { MessageService } from '../service/message.service';
import { PharmacyService } from '../service/pharmacy.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { Doctor } from '../models/Doctor.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  
  filteredString:string='';
  public drugs:Drug[]=[];
  drugL:Drug={
    drugId: 0,
    drugName: '',
    quantity: 0,
    price: 0,
    expiryDate:0,
    supplierId: 0
  }
  constructor(private pharmacyService:PharmacyService,private service:MessageService,public _authservice:LoginService) { }

  ngOnInit(): void {
    this.getAllDrugs();

  }
  getAllDrugs(){
    this.pharmacyService.getalldrugs()
    .subscribe(
      response=>{
        this.drugs=response;
        console.log(response);
      }

    );
  }
  BookDrug(drugk:Drug){
    this.drugL.drugId=drugk.drugId;
    this.drugL.drugName=drugk.drugName;
    this.drugL.quantity=drugk.quantity;
    this.drugL.price=drugk.price;
    this.drugL.expiryDate=drugk.expiryDate;
    this.drugL.supplierId=drugk.supplierId;
    // this.service.sendMessage(this.drugL);
  }
  SendDrugData(drug: Drug) {
    //console.log(drug);
    this.service.sendMessage(drug);
  }
}
