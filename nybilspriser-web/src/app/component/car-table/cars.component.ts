import {Component, Input} from '@angular/core';
import {CarInfo} from "../../model/car-info";

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrl: './cars.component.css'
})
export class CarsComponent {
    @Input() cars: CarInfo[] = [];
}
