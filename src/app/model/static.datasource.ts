import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = new Array(50).fill(undefined).map((_, i) => {
    const res = new Product(
      i + 1,
      `Product ${i + 1}`,
      `Category ${i % 3 === 0 ? 'Tres' : i % 3 > 1 ? 'Dias' : 'Uno'}`,
      `Product ${i + 1} (Category ${
        i % 3 === 0 ? 'Tres' : i % 3 > 1 ? 'Dias' : 'Uno'
      })`,
      Math.floor(Math.random() * 200 + 199)
    );
    return res;
  });

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
