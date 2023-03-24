import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userDetails:any;
  constructor( private userService:ProductService){
  }
  ngOnInit(): void {
    this.userDetails=this.userService.userDetails;
    if( !this.userDetails){
      this.userDetails=this.userService.getUserDetails();
    } 
  }
}
