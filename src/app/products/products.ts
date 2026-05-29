import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.model';
import { CartService } from '../cartservice';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
 
})
export class Products {
  private productService = inject(ProductService);
  private cartService = inject(CartService);


  // Expose the signal directly to the template
  readonly products = this.productService.products;

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    this.cartService.addToCart(product);
  }
}