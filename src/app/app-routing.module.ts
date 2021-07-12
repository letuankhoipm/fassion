import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@routes/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'product',
    loadChildren: () => import('@routes/product/product.module').then(mod => mod.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
