import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardServicesComponent } from './card-services/card-services.component';


@NgModule({
  declarations: [
    CarrouselComponent,
    CardServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
