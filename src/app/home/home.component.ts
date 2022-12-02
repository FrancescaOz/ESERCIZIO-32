import { Component, OnInit } from '@angular/core';
import { post } from '../post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    d: any;

    constructor() { }

    ngOnInit(): void {
    }
    getData(value:any) {

        post(value);
        console.log(value)
      }
}
