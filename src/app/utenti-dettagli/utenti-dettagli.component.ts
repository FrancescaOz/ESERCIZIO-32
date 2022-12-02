import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { getInfo } from '../users.service';

@Component({
    selector: 'app-utenti-dettagli',
    templateUrl: './utenti-dettagli.component.html',
    styleUrls: ['./utenti-dettagli.component.scss']
})
export class UtentiDettagliComponent implements OnInit {

    id: any;
    users:any;

    constructor() {

    }

    ngOnInit(): void {
        this.id = window.location.href.split('/').pop();
        getInfo(this.id).then((users) => {
            this.users = users;
        });
    }

}
