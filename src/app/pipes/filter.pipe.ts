import { Pipe, PipeTransform } from '@angular/core';
import { Drug } from '../models/drug.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(drugs :Drug[],filterString:string) {
    if(!drugs||!filterString){
      return drugs;
    }
    return drugs.filter(drug=> drug.drugName.toLowerCase().indexOf(filterString.toLowerCase())!==-1);
  
  }
}
