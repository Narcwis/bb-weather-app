import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'backbase-weather-app';

    constructor(private weatherService: WeatherService) {
    }
}

