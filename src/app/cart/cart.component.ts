import { Component, inject } from '@angular/core';
import { CartService } from '../cartservice';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone: true
})
export class CartPage {
  private cartService = inject(CartService);

  readonly items = this.cartService.items;
  readonly itemCount = this.cartService.itemCount;
  readonly totalPrice = this.cartService.totalPrice;

  updateQuantity(id: number, qty: number): void {
    this.cartService.updateQuantity(id, qty);
    
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}