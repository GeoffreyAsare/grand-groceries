import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from './product/product';
import { tap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DownloadService {

  private productsUrl = 'api/products';
  product$ = this.http.get<IProduct[]>(this.productsUrl)
  .pipe(
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  );

  constructor(private http: HttpClient) { }
}
