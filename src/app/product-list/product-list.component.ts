import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product.model';
import { CartService } from './../services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products;

    // by setting public/private now you can use this dot (this.cart)
    // so now "cart" can be used in template like "cart.add(product)"
    constructor(public cart: CartService, private http: HttpClient) {}

    ngOnInit() {
        this.products = this.http.get('/assets/products.json');
    }

    greatDeal(product: Product) {
        alert(`${product.name} - what a great deal!`);
    }

    logInterest(product: Product) {
        console.log(`The user is interested in ${product.name}`);
    }
}
