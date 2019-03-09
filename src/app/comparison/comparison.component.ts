import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../models/product.model';

@Component({
    selector: 'app-comparison',
    templateUrl: './comparison.component.html',
    styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
    // define input binding for template
    // this is passed in from product-list component
    @Input() product: Product;
    // output hover event
    @Output() interest = new EventEmitter();

    constructor() {}

    ngOnInit() {}
}
