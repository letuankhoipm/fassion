import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
