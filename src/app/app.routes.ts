import { Routes } from '@angular/router';
import { Products } from './products/products';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { CartPage } from './cart/cart.component';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'products', component: Products},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'cart', component: CartPage}
    
];