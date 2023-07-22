import {ChangeDetectionStrategy, Component, ElementRef, inject, Input, NgZone} from '@angular/core';
import {CarModel} from "../../models/car.model";


@Component({
  standalone: true,
  selector: 'car-preview',
  templateUrl: 'car-preview-component.html',
  styleUrls: ['car-preview.component.scss'],
  host: {'width': '400px'},
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarPreviewComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);
  @Input({required: true}) preview!: CarModel;

  carDiscount(price: number) {
    return price - (Math.floor(Math.random() * 15) / 100) * price;
  }

  blink() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = 'white';
      }, 1000);
    });

    return null;
  }
}
