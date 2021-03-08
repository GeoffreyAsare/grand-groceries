import { Injectable } from '@angular/core';
import { IProduct } from './product/product';
import { Subject, combineLatest, of, BehaviorSubject } from 'rxjs';
import { DownloadService } from './download.service';
import { map, tap, mergeMap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  private products: IProduct;
  private selectedProductsSubject = new BehaviorSubject<IProduct>(null);
  addItems$ = this.selectedProductsSubject.asObservable();

  addToCart(product: IProduct): void {
    this.selectedProductsSubject.next(product);
    console.log('Added to Cart');
  }


  constructor() {}
}

/*
 * So the way this will work is...
 * An Action stream will be attached to each button with the onClick() event that passes the product Id to the obsevable.
 * The id is then added to an array of ids that will populate the add service observeble.
 * The cart component reads the observable in the add service to display in the cart template.
 */
