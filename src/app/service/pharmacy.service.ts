import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drug } from '../models/drug.model';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Supplier } from '../models/supplier.model';
import { Order } from '../models/order.model';
import { Doctor } from '../models/Doctor.model';
import { FOrder } from '../models/FOrder.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  baseUrl='http://localhost:5000/api/';

  constructor(private http:HttpClient) { }  



  getalldrugs():Observable<Drug[]>{
    return this.http.get<Drug[]>(this.baseUrl+'Drug');
  }
  AddDrugs(drugL:Drug):Observable<Drug>{
    return this.http.post<Drug>(this.baseUrl+'Drug',drugL);
  }
  updateDrugs(drugL:Drug){
    return this.http.put(this.baseUrl+'Drug/',drugL);
  }
  deleteDrugs(id:number):Observable<Drug>{
    return this.http.delete<Drug>(this.baseUrl+'Drug/'+id);
  }
  getDrugById(id:number):Observable<Drug>{
    return this.http.get<Drug>(this.baseUrl+'Drug/'+id);
  }





  orderUpdate(order:Order):Observable<Order>{
    return this.http.post<Order>(this.baseUrl+'OrderDetails',order);
  }
  getAllOrderDetails():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl+'OrderDetails');
  }
  delteOrder(id:number):Observable<Order>{
    return this.http.delete<Order>(this.baseUrl+'OrderDetails/'+id);
  }

getUserById(id:number):Observable<Doctor>{
  return this.http.get<Doctor>(this.baseUrl+'Users/'+id);
}



  getAllSupplierdata():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.baseUrl+'Supplier');
  }

  AddSupplier(supplier:Supplier):Observable<Supplier>{
    return this.http.post<Supplier>(this.baseUrl+'Supplier/',supplier);
  }
  deleteSupplier(id:number):Observable<Supplier>{
    return this.http.delete<Supplier>(this.baseUrl+'Supplier/'+id);
  }
  UpdateSupplier(id:number,supplier:Supplier):Observable<Supplier>{
    return this.http.put<Supplier>(this.baseUrl+'Supplier/',supplier);
  }


  postFinalDb(order:FOrder):Observable<FOrder>{
    return this.http.post<FOrder>(this.baseUrl+'FinalDb',order);
  }
  putFinalDb(order:FOrder):Observable<FOrder>{
    return this.http.put<FOrder>(this.baseUrl+'FinalDb/PutOrderDetail',order);
  }

  getFinalDb():Observable<FOrder[]>{
    return this.http.get<FOrder[]>('http://localhost:5000/api/FinalDb');
  }
  getAllDetailsById(id:number):Observable<FOrder[]>{
    return this.http.get<FOrder[]>('http://localhost:5000/api/FinalDb/'+id);
  }

  OrderPlacedEmail(lst:FOrder[]):Observable<FOrder[]>{
    return this.http.post<FOrder[]>('http://localhost:5000/api/EmailProcess/EmailSendings',lst);
  }
  AdminConform(order:FOrder):Observable<FOrder>{
    return this.http.post<FOrder>('http://localhost:5000/api/EmailProcess/AdminEmail/OrderConfirmation',order)
  }
}
