import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardProductsComponent } from './card-products/card-products.component';


@NgModule({
  declarations: [
    CardProductsComponent,
    CarrouselComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
