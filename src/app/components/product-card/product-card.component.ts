import { Component, Input, OnInit } from '@angular/core';
import { ProductDetail } from '@models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() data: ProductDetail | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
