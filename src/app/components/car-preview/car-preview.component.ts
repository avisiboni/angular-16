import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, NgZone, Output } from '@angular/core';
import { CarModel } from "../../models/car.model";
import { Router, RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'car-preview',
  imports: [RouterModule],
  templateUrl: 'car-preview-component.html',
  styleUrls: ['car-preview.component.scss'],
  host: { 'width': '400px' },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarPreviewComponent {
  private element = inject(ElementRef);
  private zone = inject(NgZone);
  private readonly router = inject(Router);
  @Input({ required: true }) preview!: CarModel;

  carDiscount(price: number) {
    return price - (Math.floor(Math.random() * 15) / 100) * price;
  }

  async navigateToCar(id: number) {
    await this.router.navigate(['/car', id], {state: this.preview});
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
