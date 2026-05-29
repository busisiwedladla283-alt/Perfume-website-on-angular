import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { Product } from './interfaces/product.model'; // Reuse your product interface

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  // Private writable signal (only this service can mutate it)
  private readonly cartItems = signal<CartItem[]>([]);

  // Public read-only signals for components
  readonly items = this.cartItems.asReadonly();

  // Derived state: automatically updates when cartItems changes
  readonly itemCount = computed(() =>
    this.cartItems().reduce((count, item) => count + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  addToCart(product: Product): void {
    this.cartItems.update(items => {
      const existing = items.find(item => item.id === product.id);
      if (existing) {
        return items.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.cartItems.update(items =>
      items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}