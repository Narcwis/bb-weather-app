import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../interfaces/weather';
import { CityWeather } from '../interfaces/city-weather';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-weather-panels',
  templateUrl: './weather-panels.component.html',
  styleUrls: ['./weather-panels.component.scss']
})
export class WeatherPanelsComponent implements OnInit {

    London: CityWeather;
    Cardiff: CityWeather;
    Rome: CityWeather;
    Amsterdam: CityWeather;
    Florence: CityWeather;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.weatherService.getCityWeather('London').subscribe((data: CityWeather) => {
            this.London = data;
        });
        this.weatherService.getCityWeather('Amsterdam').subscribe((data: CityWeather) => {
            this.Amsterdam = data;
        });
        this.weatherService.getCityWeather('Rome').subscribe((data: CityWeather) => {
            this.Rome = data;
        });
        this.weatherService.getCityWeather('Cardiff').subscribe((data: CityWeather) => {
            this.Cardiff = data;
        });
        this.weatherService.getCityWeather('Florence').subscribe((data: CityWeather) => {
            this.Florence = data;
        });

        // forkJoin(
        //     this.weatherService.getCityWeather('London'),
        //     this.weatherService.getCityWeather('Cardiff'),
        //     this.weatherService.getCityWeather('Amsterdam'),
        //     this.weatherService.getCityWeather('Rome'),
        //     this.weatherService.getCityWeather('Florence')
        // ).subscribe(([London, Cardiff, Amsterdam, Rome, Florence]: CityWeather[]) => {
        //     console.log('DEBUG');
        //     this.weatherData = {
        //         london: London,
        //         cardiff: Cardiff,
        //         amsterdam: Amsterdam,
        //         rome: Rome,
        //         florence: Florence
        //     };
        //     console.log(this.weatherData);
        // });
    }

}
