import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Product } from './../models/product.model';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product;
    products;

    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.products = this.http.get<Product[]>('/assets/products.json').pipe(
            map((products: Product[]) => {
                this.product = products[this.route.snapshot.params.id];
                return this.product;
            })
        );
    }
}
