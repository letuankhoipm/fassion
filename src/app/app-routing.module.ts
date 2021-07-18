import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: { animation: 'home' },
    loadChildren: () => import('@routes/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'product',
    data: { animation: 'product' },
    loadChildren: () => import('@routes/product/product.module').then(mod => mod.ProductModule),
  },
  {
    path: 'contact',
    data: { animation: 'contact' },
    loadChildren: () => import('@routes/contact/contact.module').then(mod => mod.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
