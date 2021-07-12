import { CarouselModule } from '@components/carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
