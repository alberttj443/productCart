import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdFilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberonlyDirective } from './numberonly.directive'; 


@NgModule({
  declarations: [ProdFilterPipe, NumberonlyDirective],
  imports: [
    CommonModule,
 
  ],
  exports:[ProdFilterPipe,NumberonlyDirective]
})
export class SharedModule { }
