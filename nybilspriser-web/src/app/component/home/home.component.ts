import {Component, OnInit} from '@angular/core';
import {CarInfo} from "../../model/car-info";
import {CarService} from "../../service/car.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    cars: CarInfo[] = [];
    list: CarInfo[] = []
    page = 1;
    pageSize = 20;
    loading = false;

    constructor(private carService: CarService) {
    }

    ngOnInit(): void {
        this.fetchCars();

    }

    fetchCars() {
        this.loading = true;
        this.carService.getCarInfo().subscribe(value => {
            this.cars = value;
            this.loading = false;
        });
    }

    get carList() {
        return this.cars.map((car, i) => ({id: i + 1, ...car})).slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize,
        );
    }
}
