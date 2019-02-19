import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CityWeather } from '../interfaces/city-weather';
import { CityForecast } from '../interfaces/city-forecast';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-weather-panels',
  templateUrl: './weather-panels.component.html',
  styleUrls: ['./weather-panels.component.scss']
})
export class WeatherPanelsComponent implements OnInit {

    london: CityWeather;
    londonForecast: CityForecast[];
    cardiff: CityWeather;
    cardiffForecast: CityForecast[];
    rome: CityWeather;
    romeForecast: CityForecast[];
    dublin: CityWeather;
    dublinForecast: CityForecast[];
    milan: CityWeather;
    milanForecast: CityForecast[];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.getWeather();
    }

    public getWeather(): void {
        forkJoin(
            this.weatherService.getCityWeather('cardiff'),
            this.weatherService.getCityWeather('london'),
            this.weatherService.getCityWeather('dublin'),
            this.weatherService.getCityWeather('rome'),
            this.weatherService.getCityWeather('milan')
        ).subscribe((data) => {
            [this.cardiff, this.london, this.dublin, this.rome, this.milan] = data;
        }, ({error, city}) => {
            console.log(`weather for ${city} returned the following error:`, error);
        });
    }

    public getForecast(city): void {
        this.weatherService.getCityForecast(city).subscribe((data) => {
            switch (city) {
                case 'london':
                    this.londonForecast = data;
                    break;
                case 'dublin':
                    this.dublinForecast = data;
                    break;
                case 'rome':
                    this.romeForecast = data;
                    break;
                case 'cardiff':
                    this.cardiffForecast = data;
                    break;
                case 'milan':
                    this.milanForecast = data;
                    break;
                default:
                    break;
            }
        }, ({error, cityError}) => {
            console.log(`forecast for ${cityError} returned the following error:`, error);
        });
    }

}
