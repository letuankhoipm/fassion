import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public listImg = [
    {
      id: 1,
      imageUrl: 'assets/images/a1.jpg',
      title: 'Havana Serum',
      action: 'ĐẶT HÀNG'
    },
    {
      id: 2,
      imageUrl: 'assets/images/a2.jpg',
      title: 'Sun di Gioia',
      action: 'MUA NGAY'
    },
    {
      id: 3,
      imageUrl: 'assets/images/a3.jpg',
      title: 'Gucci Bobby Brown',
      action: 'XEM CHI TIẾT'
    },
  ];
  constructor(config: NgbCarouselConfig) {
    config.pauseOnHover = true;
    config.interval = 5000;
   }

  ngOnInit(): void {
  }

}
