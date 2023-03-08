import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { PrincipalLayoutsComponent } from './layouts/principal-layouts/principal-layouts.component';
import { ProductosLayoutsComponent } from './layouts/productos-layouts/productos-layouts.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalLayoutsComponent,
    children:[
      {
        path: '',
        loadChildren: () =>
        import('./Modules/home/home.module').then((m) => m.HomeModule),
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./Modules/auth/auth.module').then((m) => m.AuthModule),
      }
    ]
  },
  {
    path: '',
    component: ProductosLayoutsComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
        import('./Modules/products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'services',
        loadChildren: () =>
        import('./Modules/services/services.module').then((m) => m.ServicesModule),
      },
    ],
  },

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
