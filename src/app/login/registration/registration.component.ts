import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registerForm: FormGroup;
constructor(private fb:FormBuilder,private userInfo:ProductService,private router:Router){
  this.registerForm= this.fb.group({
    customerName: ['', Validators.required],
    country: ['India', Validators.required],
    state: ['', Validators.required],
    district: ['', Validators.required],
    city: ['', [Validators.required]],
    contatctno: ['', Validators.required],
    mail: ['',[ Validators.required,Validators.email]],
    address: ['', Validators.required]
});
}
countries=['India','USA','UK','Canada']
ngOnInit(): void {
  
}
 
onRegister(){
  if(this.registerForm.valid){
    this.userInfo.userDetails=this.registerForm.value;
    this.userInfo.userRegistration(this.registerForm.value)
    this.router.navigate(['user/login'])
  } 
}
}