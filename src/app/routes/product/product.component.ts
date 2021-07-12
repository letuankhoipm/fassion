import { ProductDetail } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public listProducts: ProductDetail[] = [
    {
      id: 0,
      name: 'Moi Gạo',
      description: 'Mặt nạ tinh khiết chiết suất từ lúa gạo',
      provider: 'Rice',
      imageUrl: 'assets/images/prod_0.jpg',
      price: '160,000'
    },
    {
      id: 0,
      name: 'Sparkling Lemon Foam Cleaner',
      description: 'Sữa rửa mặt chua lè',
      imageUrl: 'assets/images/prod_1.jpg',
      provider: 'Holika Holika',
      price: '160,000'
    },
    {
      id: 0,
      name: 'ALOE Soothing Gel',
      description: 'Kem nha đam thoa cơ thể',
      imageUrl: 'assets/images/prod_2.jpg',
      provider: 'Holika Holika',
      price: '160,000'
    },
    {
      id: 0,
      name: 'Moi Gạo',
      description: 'Mặt nạ tinh khiết chiết suất từ lúa gạo',
      provider: 'Rice',
      imageUrl: 'assets/images/prod_0.jpg',
      price: '160,000'
    },
    {
      id: 0,
      name: 'Sparkling Lemon Foam Cleaner',
      description: 'Sữa rửa mặt chua lè',
      imageUrl: 'assets/images/prod_1.jpg',
      provider: 'Holika Holika',
      price: '160,000'
    },
    {
      id: 0,
      name: 'ALOE Soothing Gel',
      description: 'Kem nha đam thoa cơ thể',
      imageUrl: 'assets/images/prod_2.jpg',
      provider: 'Holika Holika',
      price: '160,000'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
