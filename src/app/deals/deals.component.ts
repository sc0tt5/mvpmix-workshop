import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
    selector: 'app-deals',
    templateUrl: './deals.component.html',
    styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
    dealList;
    constructor(http: HttpClient) {
        // this just defines a stream
        // when we use async pipe, then it gets...but not until called with this
        this.dealList = timer(0, 10000).pipe(
            // switchMap ...takes the outer observable and each one it emits it creates
            // a new instance
            // what happens is if one of the http fails, it will only return the successful ones
            switchMap(() => {
                return http.get('/assets/deals.json');
            })
        );
    }

    ngOnInit() {}
}
