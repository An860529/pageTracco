import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from './services.module';

const routes: Routes = [{ path: '', component: ServicesModule}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
