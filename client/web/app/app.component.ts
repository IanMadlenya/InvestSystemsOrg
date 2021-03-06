import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon} from '@angular2-material/icon/icon';

import { SpinnerComponent } from './shared/spinner/spinner.component'

// @ngrx/store
import { Store, provideStore } from '@ngrx/store';
import { areasReducer } from './three-circles/area.reducer'

@Component({
    moduleId: module.id,
    selector: 'invest-systems-org',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES, MdToolbar, MD_BUTTON_DIRECTIVES, MdIcon, SpinnerComponent],
    providers: [
        ,
        provideStore({ areas: areasReducer }),
    ]
})
export class AppComponent {
    constructor(private af: AngularFire) { }
    // constructor(
    //     private store : Store<any>
    // ){}

    title = 'InvestSystems.org';

    toolbarColor: String = 'primary';

    ngOnInit() {
        window.addEventListener('online', this.updateOnlineOfflineIndicator);
        window.addEventListener('offline', this.updateOnlineOfflineIndicator);
        this.updateOnlineOfflineIndicator()
    }

    login() {
        this.af.auth.login();
    }

    updateOnlineOfflineIndicator = () => {
        if (navigator.onLine) {
            console.log('Online');
            this.toolbarColor = 'primary';
        } else {
            console.log('Offline');
            this.toolbarColor = 'default';
        }
    }
}
