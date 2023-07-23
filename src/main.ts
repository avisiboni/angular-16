import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withComponentInputBinding} from "@angular/router";
import {ROUTES} from "./app/app-routing";
import {IMAGE_CONFIG} from "@angular/common";
import { CSP_NONCE } from "@angular/core";



 bootstrapApplication(AppComponent,{
   providers:[
     provideRouter(ROUTES,  withComponentInputBinding()),
     [{ provide: CSP_NONCE, useFactory: ()=> crypto.randomUUID() }] 
   ]
 })

