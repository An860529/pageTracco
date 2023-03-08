import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { PrincipalLayoutsComponent } from './layouts/principal-layouts/principal-layouts.component';
import { ProductosLayoutsComponent } from './layouts/productos-layouts/productos-layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutsComponent,
    PrincipalLayoutsComponent,
    ProductosLayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
