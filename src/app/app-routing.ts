import {Route} from "@angular/router";

export const ROUTES: Route[] = [
  {
    path: 'lobby', loadComponent: () => import('./pages/home/home.page').then(mod => mod.HomePage)
  },
  {
    path: 'car/:carId', loadComponent: () => import('./pages/car-details/car-details.page').then(mod => mod.CarDetailsPage)
  },
  {
    path:'**', redirectTo:'lobby'
  }
];
