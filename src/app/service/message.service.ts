import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { Drug } from '../models/drug.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  MyDrugList:Drug[]=[];

  drugk:Drug;
  constructor() { }

  public sendMessage(drug:Drug){
    this.MyDrugList.push(drug);
  }
  public getMessage(){
    return this.MyDrugList
  }
}
