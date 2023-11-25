import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier.model';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  filteredString:string='';
  public Suppliers:Supplier[]=[];
  formValue: any;

  


  constructor(private pharmacyService:PharmacyService) { }

  

  ngOnInit(): void {
    this.getAllSupplier()

  }
  getAllSupplier(){
    this.pharmacyService.getAllSupplierdata()
    .subscribe(
      response=>{
        this.Suppliers=response;
        console.log(response);
      }

    );
  }
  
  supplieradd : Supplier={
    supplierId: 0,
    supplierName: '',
    supplierEmail: '',
    supplierContact:0}

  onSubmit(){
    this.pharmacyService.AddSupplier(this.supplieradd)
    .subscribe(
      Response=>{
        this.getAllSupplier();
        this.pharmacyService.AddSupplier(this.supplieradd);
      }
    )
  }


  DeleteSupplier(id:number){
    this.pharmacyService.deleteSupplier(id)
    .subscribe(
      Response=>{
        this.getAllSupplier();
      }
    );

  }


  onEdit(row:Supplier){
    this.supplieradd.supplierId=row.supplierId;
    this.supplieradd.supplierName=row.supplierName;
    this.supplieradd.supplierContact=row.supplierContact;
    this.supplieradd.supplierEmail=row.supplierEmail;
  }

  UpdateSupplier(){
    console.log(this.supplieradd);
    this.pharmacyService.UpdateSupplier(this.supplieradd.supplierId,this.supplieradd)
    .subscribe(
      Response=>{
        alert("Updated Successfully");
        this.getAllSupplier();
      }
    )

  }
}
