import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
    constructor(public prodservice:ProductService){}
  orderItems:any=[]
  // [ { "orderNumber": 1679563936000,itemCount:2, "items": [ { "id": 1679563933204, "prodID": 1, "prodname": "Product 1", "imgpath": "assets/prod.jpg", "cart": true, "unitRate": 1, "grossRate": 22, "qty": 1, "amount": 22 } ], "orderDate": "2023-03-23T09:32:16.000Z", "grossAmount": 22, "Status": "Pending" } ]
  @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
  selectedItem:any;
  ngOnInit(): void { 
    this.orderItems=this.prodservice.orderItems;
    this.ejDialog?.hide();
  }
  
  rowSelected(event:any){
    this.ejDialog?.show(); 
    this.selectedItem=event.data;
    console.log(event.data)
  }
  closepopup(){
    this.ejDialog?.hide();
  }
  public onBeforeOpen = function(args: any): void {
    // setting maxHeight to the Dialog.
    args.maxHeight = '400px';
  }
}
