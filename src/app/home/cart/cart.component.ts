import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(public prodservice:ProductService,private router:Router){}
cartItems:any[]=[]
ngOnInit(): void {
  this.cartItems= this.prodservice.cartItems;
 
}
removeFormCart(data:any){ 
this.cartItems=(this.cartItems.filter((ele:  any)=>ele.prodID != data.prodID))
    this.prodservice.removeFromCart(data)
   
}
quantityChange(index:number){ 
  this.cartItems[index].amount=this.cartItems[index].qty*this.cartItems[index].grossRate;
  
}

placeOrder(){ 
  this.prodservice.addtoorderItems(this.cartItems)
  this.prodservice.removeAllCartItems();
  this.cancelOrder();
  alert('Order placed successfully');
  this.router.navigate(['home','order'])
}
cancelOrder(){
  this.prodservice.removeAllCartItems()
  this.cartItems=[]
  this.router.navigate(['home'])
}
formInvalid(){
 return(  this.cartItems.some(ele=>ele.qty<1))
}
}
