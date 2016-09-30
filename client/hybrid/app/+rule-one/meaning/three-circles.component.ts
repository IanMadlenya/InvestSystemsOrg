import { Component, OnInit, Input } from '@angular/core';

import { Meaning } from './meaning.model';

@Component({
    selector: 'three-circles',
    templateUrl: 'build/+rule-one/meaning/three-circles.component.html'
})
export class ThreeCirclesComponent implements OnInit {
    @Input() meaning: Meaning;

    constructor() { }

    ngOnInit() { }
}