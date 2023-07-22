import {Component} from "@angular/core";
import {HeaderComponent} from "../components/header.component";

@Component({
  standalone: true,
  templateUrl: 'home.page.html',
  selector: 'app-home',
  imports:[HeaderComponent]
})
export class HomePage {

}
