import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherPanelsComponent } from './weather-panels/weather-panels.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherPanelsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatExpansionModule,
        BrowserAnimationsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
