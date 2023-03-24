import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LandlingpageComponent } from './landlingpage/landlingpage.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path:'',component:LandlingpageComponent,children:[
    {path:'product/:id',component:ProductComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent},
    {path:'profile',component:ProfileComponent},
    {path:'',component:HomeComponent},
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
