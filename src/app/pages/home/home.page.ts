import { Component, computed, effect, inject, OnInit, signal } from "@angular/core";
import { HeaderComponent } from "../../components/header.component";
import { CarsServices } from "../../services/cars.services";
import { CarModel } from "../../models/car.model";
import { NgForOf } from "@angular/common";
import { CarPreviewComponent } from "../../components/car-preview/car-preview.component";
import { FormsModule } from "@angular/forms";
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, debounce, debounceTime, filter, interval } from "rxjs";

@Component({
  standalone: true,
  templateUrl: 'home.page.html',
  selector: 'app-home',
  styleUrls: ['home.page.scss'],
  imports: [HeaderComponent, NgForOf, CarPreviewComponent, FormsModule],
  providers: [CarsServices]
})
export class HomePage {

  protected cars = signal<CarModel[]>([]);
  protected readonly countries = signal<string[]>(['TLV', 'Greece', 'Swiss', 'German'])
  protected pickup = signal<string>('Swiss');
  protected return = signal<string>('German');

  protected journey = computed(() => `${this.pickup()} - ${this.return()}`);
  protected filterName = signal<string>('');
  //! What is the lifetime of that observable? 
  protected filterCriteria$ = toObservable(this.filterName);
  private readonly carsService = inject(CarsServices);

  criteria$ = combineLatest({
    name: this.filterCriteria$,
    

    //....any other data 
  }).pipe(
    debounceTime(350),
  );
private  criteria = toSignal(this.criteria$, {
    initialValue: {
      name: '',
    
    
    }
  });

  // protected timeLeft = computed(() =>  1000 * 60 * 60 - this.criteria().timeLeft );
  constructor() {
    effect(() => {
      //log user journey selection 
      console.log('User routes', this.journey());
    });
    setTimeout(() => {
      this.pickup.set('TLV');
      this.return.set('Greece');

    }, 2000);
    effect(async () => {
      this.listCar();
    })
  }

  private async listCar() {
    const c = this.criteria();
    this.cars.set(await this.carsService.list(c.name));
  }
  filterCars(searchKey: string) {
    const cars = this.cars();

    // this.filterableCar = this.cars.filter(x=> x.name.includes(searchKey))
  }
  startSale() {

  }



}
