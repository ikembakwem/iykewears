import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private products: Product[] = new Array(20).fill(undefined).map((_, i) => {
    const res = new Product(
      i + 1,
      `Product ${i + 1}`,
      `Category ${i % 3 === 0 ? 'Tres' : i % 3 > 1 ? 'Dias' : 'Uno'}`,
      `Product ${i + 1} (Category ${
        i % 3 === 0 ? 'Tres' : i % 3 > 1 ? 'Dias' : 'Uno'
      })`,
      149
    );
    return res;
  });

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
