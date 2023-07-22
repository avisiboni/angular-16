import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header.component";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  standalone:true,
  imports: [ RouterOutlet, HeaderComponent, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
}
