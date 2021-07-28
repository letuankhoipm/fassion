import { ProductService } from './../../services/product.service';
import { ProductDetail } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public listProducts: ProductDetail[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts(): void {
    this.productService.getProducts().subscribe((res: any) => {
      console.log(res);
      this.listProducts = res;

    });
  }

}
