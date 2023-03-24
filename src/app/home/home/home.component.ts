import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  constructor(private prodservice:ProductService,private router:Router){}
  search='';
  items:any[]=[]; 
  prodPopup=false;
  selectedItem:any=null;
  ngOnInit(): void {
    this.items=this.prodservice.items.slice();
    console.log(this.prodservice.items)
  }
  addToCart(data:any){
    let index=-1; 
    this.items.forEach((ele,i)=>{
      if(ele.id==data.id){
        index=i;
        this.items[i].cart=!this.items[i].cart
      }
    });
    
    if( this.items[index].cart){ 
      this.prodservice.addToCart(data);
    }
    else{ 
      this.prodservice.removeFromCart(data);
    }

  }
  openProdDetails(data:any){
    this.selectedItem=data;
    this.prodPopup=true;
    // this.router.navigate(['/home/product/',data.id])
  }
  closeProdPopup(data:any){ 
    if(data){
      this.prodPopup=false;
    }
  }
}
