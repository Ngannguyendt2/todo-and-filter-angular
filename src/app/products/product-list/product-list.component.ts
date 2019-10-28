import {Component, OnInit} from '@angular/core';
import {IProduct} from './IProduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  widthImg = 100;
  toggle = false;
  products: IProduct[] = [
    {
      name: 'chihuahua',
      birth: new Date(2010, 10, 10),
      image: 'assets/products/images/chihuahua.jpeg',
      price: 10000000,
      status: 'true'
    }, {
      name: 'alaska',
      birth: new Date(2012, 12, 12),
      image: 'assets/products/images/alaska.jpeg',
      price: 15000000,
      status: 'false'
    }
  ];
  productFilter: IProduct[];

  constructor() {
  }

  ngOnInit() {
    this.productFilter = this.products;
  }


  setFilter(keyword) {
    if (keyword) {
      this.productFilter = this.filter(keyword);
    } else {
      this.productFilter = this.products;
    }
  }

  filter(keyword): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.name.indexOf(keyword) !== -1
    );
  }

  getByStatus(status) {
    console.log(status);
    if (status) {
      this.productFilter = this.products.filter((product: IProduct) => product.status === status);
    } else {
      this.productFilter = this.products;
    }
  }

  changeImage() {
    this.toggle = !this.toggle;
  }

  delete(id: number) {
    this.products.splice(id, 1);
  }


}
