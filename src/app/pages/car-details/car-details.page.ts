import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
  standalone: true,
})
export class CarDetailsPage {
  @Input({required: true}) protected  carId!: number;
}
