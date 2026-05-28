import { Injectable, signal, Signal } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // Private mutable signal for internal updates (if needed later)
  private readonly productsSignal = signal<Product[]>([
    { id: 1, name: 'Golden Rose', price: 950, desc: 'A soft floral fragrance with hints of rose, jasmine, and vanilla.', image: 'product-1-image.png' },
    { id: 2, name: 'Midnight Oud', price: 1200, desc: 'A deep bold scent with oud, amber and musk.', image: 'product-2-image.png' },
    { id: 3, name: 'Velvet Musk', price: 1100, desc: 'Warm vanilla blended with sandalwood and rose.', image: 'product-3-image.png' }
  ]);

  // Public read-only signal for consumption
  readonly products: Signal<Product[]> = this.productsSignal.asReadonly();
}