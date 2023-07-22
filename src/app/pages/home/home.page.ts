import {Component, inject, OnInit} from "@angular/core";
import {HeaderComponent} from "../../components/header.component";
import {CarsServices} from "../../services/cars.services";
import {CarModel} from "../../models/car.model";
import {NgForOf} from "@angular/common";
import {CarPreviewComponent} from "../../components/car-preview/car-preview.component";
import {FormsModule} from "@angular/forms";
import {filter} from "rxjs";

@Component({
  standalone: true,
  templateUrl: 'home.page.html',
  selector: 'app-home',
  styleUrls:['home.page.scss'],
  imports: [HeaderComponent, NgForOf, CarPreviewComponent,FormsModule],
  providers:[CarsServices]
})
export class HomePage implements  OnInit{
  private    cars:CarModel[] = [];
  protected   filterableCar:CarModel[] = [];
  protected  filterCriteria!:string;
  private readonly  carsService = inject(CarsServices);
  async ngOnInit(){
    this.cars = this.filterableCar  = await  this.carsService.list();
  }
  filterCars(searchKey:string){
        this.filterableCar = this.cars.filter(x=> x.name.includes(searchKey))
  }


  protected readonly filter = filter;
}
