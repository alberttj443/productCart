import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Output() response=new EventEmitter<any>();
@Input() data: any;
constructor(private prodservice:ProductService){}
onClose(){
  this.response.emit(true);
}
addToCart(){
 this.data.cart=!this.data.cart

 if( this.data.cart){
  this.prodservice.addToCart(this.data);
}
else{
  this.prodservice.removeFromCart(this.data);
}
}
}
