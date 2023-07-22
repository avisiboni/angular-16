import {Component} from "@angular/core";

@Component({
  standalone:true,
  template:`
      <header class="header">
          <span>Home</span>
      </header>`,
  styles:[`.header {background-color: #004b93; display: flex; justify-content: center; align-items: center; height: 70px;
    color: white; font-size: 2rem} `],
  selector:'app-header'
})
export  class HeaderComponent{

}
