import { Component } from '@angular/core';
import { IProduct } from './product';
import { DownloadService } from '../download.service';
import { EMPTY, Observable, Subject, combineLatest, of } from 'rxjs';
import { tap, catchError, map, mergeScan, scan } from 'rxjs/operators';
import { AddCartService } from '../add-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  private categoryid: number;
  cartItems: number[] = [];


  foodStuff$ = this.downloadService.product$
  .pipe(
    map(products =>
      products.filter(product =>
        this.categoryid ? product.category === this.categoryid : true)),
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  );


  constructor(private downloadService: DownloadService,
              private addCart: AddCartService) {}


  onClick({ item, id }: { item: IProduct; id: number; }): void {
    this.addCart.addToCart(item);
    this.cartItems.push(id);
  }
}
