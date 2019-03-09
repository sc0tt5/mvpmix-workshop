import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product;

    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.product = this.http
            .get('/assets/products.json')
            .pipe(switchMap(products => products[this.route.snapshot.params.id]));
    }
}
