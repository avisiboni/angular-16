import {Component, Input} from '@angular/core';
import {CarModel} from "../models/car.model";
import {NgOptimizedImage} from "@angular/common";



@Component({
  standalone: true,
  selector: 'car-preview',
  template: `
    <div class="card">
      <div class="card_header">
        <img [ngSrc]="preview.image" [alt]="preview.name" fill=""/>
      </div>
      <div class="card_body">

      </div>
    </div>
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: [
    `card {
      width: 359px;
      height: 334px;
      background-color: white;
    }`,

  ]

})

export class CarPreviewComponent {
  @Input({required: true}) preview!: CarModel;
}
