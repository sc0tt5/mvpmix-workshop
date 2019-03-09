import { Injectable } from '@angular/core';

import { Product } from './../models/product.model';

@Injectable({
    // root = so make this available everywhere
    // no need to define prodider in component
    providedIn: 'root'
})
export class CartService {
    cart = [];
    constructor() {}
    add(product: Product) {
        this.cart.push(product);
        console.log(`${product.name} was purchased`);
    }
}
