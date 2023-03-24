import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginPage:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private prodservice:ProductService){
    this.loginPage=this.fb.group({
      customerName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
onLogin(){
  this.prodservice.isLogin=true;
  this.router.navigate(['/home'])
}
}
