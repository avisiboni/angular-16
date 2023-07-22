import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withComponentInputBinding} from "@angular/router";
import {ROUTES} from "./app/app-routing";
import {IMAGE_CONFIG} from "@angular/common";



 bootstrapApplication(AppComponent,{
   providers:[
     provideRouter(ROUTES,  withComponentInputBinding()),
     {
       provide: IMAGE_CONFIG,
       useValue: {
         breakpoints: [16, 48, 96, 128, 384, 640, 750, 828, 1080, 1200, 1920]
       }
     }
   ]
 })

