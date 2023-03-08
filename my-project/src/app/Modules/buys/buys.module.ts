import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuysRoutingModule } from './buys-routing.module';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    BuysRoutingModule
  ]
})
export class BuysModule { }
