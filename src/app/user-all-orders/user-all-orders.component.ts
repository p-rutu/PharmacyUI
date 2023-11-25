import { Component, OnInit } from '@angular/core';
import { FOrder } from '../models/FOrder.model';
import { PharmacyService } from '../service/pharmacy.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user-all-orders',
  templateUrl: './user-all-orders.component.html',
  styleUrls: ['./user-all-orders.component.css']
})
export class UserAllOrdersComponent implements OnInit {
  UId: number=JSON.parse(localStorage.getItem('userId')|| '{}');
  public userdata:FOrder[]=[];
  constructor(private pharmacy:PharmacyService) { }

  ngOnInit(): void {
    this.getallUserOrders();
  }


  getallUserOrders(){
    this.pharmacy.getAllDetailsById(this.UId).subscribe(
      response=>{
        console.log(response);
        this.userdata=response;

      }
    )
  }

  PDFbtn(x:FOrder) {
    console.log('Downloading PDF');
    let data = document.getElementById('PDFbtnDiv');
    this.generatePDF(data);
  }
  generatePDF(htmlContent) {
    html2canvas(htmlContent).then((canvas) => {
      let imgWidth = 120;
      let imgHeight = (canvas.height * (1.2 * imgWidth)) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a5');
      var position = 5;
      //pdf.text('Instruction', 60, 10);
      pdf.addImage(contentDataURL, 'PNG', 15, position, imgWidth, imgHeight);
      pdf.setLineWidth(0.5);
      pdf.rect(5, 3, 140, 204);
      pdf.save('SalesReport.pdf');
    });
  }
}


