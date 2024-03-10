import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: `
        header {
            background: linear-gradient(to bottom, var(--bs-yellow) 10%, #305d8c 10%, #305d8c 90%, var(--bs-yellow) 90%);
            color: var(--bs-yellow);
            text-align: left;
            padding: 10px;
        }`
})
export class AppComponent {
    constructor() {
    }
}
