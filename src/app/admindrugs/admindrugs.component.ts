import { Component, OnInit } from '@angular/core';
import { Drug } from '../models/drug.model';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-admindrugs',
  templateUrl: './admindrugs.component.html',
  styleUrls: ['./admindrugs.component.css']
})
export class AdmindrugsComponent implements OnInit {
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

  constructor(private pharmacyService:PharmacyService) { }

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

  onSubmit(){
    console.log(this.drugL);
    this.pharmacyService.AddDrugs(this.drugL)
    .subscribe(
      Response=>{
        console.log(Response);
        console.log(this.drugL);
        this.getAllDrugs();
       
        
      }
    )
  }
  onEdit(drugp:Drug){
    this.drugL.drugId=drugp.drugId;
    this.drugL.drugName=drugp.drugName;
    
    this.drugL.price=drugp.price;
    this.drugL.expiryDate=drugp.expiryDate;
    this.drugL.supplierId=drugp.supplierId;
  }
  UpdateDrug(){
    this.pharmacyService.updateDrugs(this.drugL).
    subscribe(
      Response=>{
        console.log(Response);
        console.log(this.drugL);
        this.getAllDrugs();
      }
    )
  }

  onDelete(Id:number){
    this.pharmacyService.deleteDrugs(Id).
    subscribe(
      Response=>{
        console.log(Response);
        this.getAllDrugs();
      }
    )
  }

}
