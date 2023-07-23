import {Component, ElementRef, Input, NgZone, OnChanges, inject} from "@angular/core";

@Component({
  standalone:true,
  template:`
      <header class="header">
      <i>Your journey: {{journey}}</i>    
      </header>
      <!-- {{blink()}} -->
      `,
  styles:[`.header {background-color: #004b93; display: flex; justify-content: center; align-items: center; gap:15px; height: 70px;
    color: white; font-size: 2rem} `],
  selector:'app-header'
})
export  class HeaderComponent implements OnChanges {
  private element = inject(ElementRef);
  private zone = inject(NgZone);
  @Input({required:false}) journey?: string;
  ngOnChanges() {
    // Dirty Hack used to visualize the change detector
    this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.element.nativeElement.firstChild.style.backgroundColor = '#004b93';
      }, 1000);
    });

    return null;
  }
}
