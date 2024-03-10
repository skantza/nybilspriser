import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {CarInfo} from "../model/car-info";

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) {
    }

    public getCarInfo(): Observable<CarInfo[]> {
        return this.http.get<CarInfo[]>('api/cars').pipe(delay(500));
    }
}
