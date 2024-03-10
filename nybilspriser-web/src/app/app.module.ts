import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsComponent} from './component/car-table/cars.component';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {registerLocaleData} from "@angular/common";
import localeSv from '@angular/common/locales/sv';
import {HomeComponent} from './component/home/home.component'

registerLocaleData(localeSv, 'sv');

@NgModule({
    declarations: [
        AppComponent,
        CarsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'sv-SE'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
