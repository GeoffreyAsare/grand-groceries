import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Subject, of } from 'rxjs';
import { IProduct } from '../product/product';
import { AddCartService } from '../add-cart.service';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addedFood$: IProduct[];


  constructor() {
  }

  ngOnInit(): void {
  }

}
