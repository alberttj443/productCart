import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  userDetails:any;
  isLogin=false;
  items: { id: number, prodname: string, imgpath: string, cart: boolean, unitRate: number, grossRate: number }[] = [
    { id: 1, prodname: 'Headset', imgpath: 'assets/prod.jpg', cart: false, unitRate: 1, grossRate: 10 },
    { id: 2, prodname: 'Watch', imgpath: 'assets/prod2.jpg', cart: false, unitRate: 2, grossRate: 20 },
    { id: 3, prodname: 'Mobile', imgpath: 'assets/prod3.jpg', cart: false, unitRate: 3, grossRate: 30 },
    { id: 4, prodname: 'Camera', imgpath: 'assets/prod4.jpg', cart: false, unitRate: 4, grossRate: 40 },
    { id: 5, prodname: 'Laptop', imgpath: 'assets/prod5.jpg', cart: false, unitRate: 5, grossRate: 50 }
    , { id: 6, prodname: 'Sunglasses', imgpath: 'assets/prod6.jpg', cart: false, unitRate: 6, grossRate: 60 }];

  cartItems: {
    id: number, prodID: number, prodname: string, imgpath: string, cart: boolean, unitRate: number, grossRate: number,
    qty: number, amount: number
  }[] = []

  orderItems:{orderNumber:number,items:any[],itemCount:number,orderDate:Date,grossAmount:number,Status:string}[]=[]
  addToCart(item: any) {
    let data = {
      id: Number(new Date()), prodID: item.id, prodname: item.prodname,
       imgpath: item.imgpath, cart: item.cart, unitRate: item.unitRate, grossRate: item.grossRate,
      qty:1, amount: item.grossRate
    }
    this.cartItems.push(data);
    // localStorage.setItem('cart',JSON.stringify(this.cartItems))
  }
  removeFromCart(item:any){
    console.log(item)
    this.items.forEach(ele=>{
      if(ele.id==item.prodID){
        ele.cart=false; 
      }
    })
    this.cartItems=this.cartItems.filter(el=>el.prodID!=item.prodID)
  }
  removeAllCartItems(){
    this.cartItems=[]
    this.items.forEach(ele=>{
      ele.cart=false
    })
     
  } 

  addtoorderItems(items: any){ 
    let sum=0;
    this.cartItems.forEach(ele=>{
      sum=sum+Number(ele.amount)
    })
    this.orderItems.push({orderNumber:Number(new Date()),itemCount:items.length,items:items,orderDate:new Date(),grossAmount:sum,Status:'Pending'}) 
  }
  userRegistration(userData:any){
localStorage.setItem('user',JSON.stringify(userData))
  }
  getUserDetails(){
    if(localStorage.getItem('user')){
      let data:any=localStorage.getItem('user')
      return JSON.parse(data)
    }
    else{
      return null;
    }
  }
}
