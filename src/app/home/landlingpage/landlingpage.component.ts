import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-landlingpage',
  templateUrl: './landlingpage.component.html',
  styleUrls: ['./landlingpage.component.scss']
})
export class LandlingpageComponent implements OnInit {
  constructor(private prodservice:ProductService){}
  ngOnInit(): void {
    console.log(this.prodservice.isLogin)
    this.login=this.prodservice.isLogin;
  }
  login=false;
   
}
