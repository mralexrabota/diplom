import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }   from './app.component';


import { routing } from "./routes";
import { HomeModule } from "./modules/home/home.module";
import { AdminModule } from "./modules/admin/admin.module";



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        HomeModule,
        AdminModule,
        routing
    ],
    providers: [
        provideAuth({
            globalHeaders: [{ "Content-type": "application/json" }],
            newJwtError: true,
            noTokenScheme: true
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule { }
