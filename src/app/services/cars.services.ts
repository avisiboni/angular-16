import {Inject, inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarModel} from "../models/car.model";
import {firstValueFrom} from "rxjs";

export const api = 'https://angular-signals-api.onrender.com/cars';

@Injectable({providedIn: 'root'})
export class CarsServices {
  private httpClient = inject(HttpClient);

  public list() {
    return firstValueFrom(this.httpClient.get<CarModel[]>(api))
  }

}
