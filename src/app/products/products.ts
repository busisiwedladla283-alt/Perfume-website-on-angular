import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    {
      name: 'Golden Rose',
      price: 950,
      desc: 'A soft floral fragrance with hints of rose, jasmine, and vanilla.',
      image: 'product-1-image.png'
    },
    {
      name: 'Midnight Oud',
      price: 1200,
      desc: 'A deep bold scent with oud, amber and musk.',
      image: 'product-2-image.png'
    },
    {
      name: 'Velvet Musk',
      price: 1100,
      desc: 'Warm vanilla blended with sandalwood and rose.',
      image: 'product-3-image.png'
    }
  ];
;

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
