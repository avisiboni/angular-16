import { Component, Input, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Router, RouterModule, RouterState } from '@angular/router';
import { BehaviorSubject, interval, tap } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  imports: [RouterModule],
  standalone: true,
})
export class CarDetailsPage {
  @Input({ required: true }) protected carId!: number;
  protected readonly router = inject(Router);
  protected readonly carDetails = this.router!.getCurrentNavigation()!.extras.state as CarModel;
  private _counter$ = new BehaviorSubject<number>(60);
  private _ = this._counter$.asObservable().pipe(takeUntilDestroyed(), tap(x=> console.log('rx counter', x))).subscribe();

  protected countdown = signal<number>(60);
  constructor() {
    setInterval(() => {
       this.countdown.update((current) => current - 1); 
       this._counter$.next(this._counter$.value - 1);
       }, 1000)
    effect(() => {
      console.log('counter ', this.countdown());
      

    })
  }








}
