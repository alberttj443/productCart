import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LandlingpageComponent } from './landlingpage/landlingpage.component';
import { OrderComponent } from './order/order.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    CartComponent,
    LandlingpageComponent,
    OrderComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,GridModule ,DialogModule
  ]
})
export class HomeModule { }
