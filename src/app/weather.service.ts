import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityWeatherServer } from './interfaces/city-weather-server';
import { CityWeather } from './interfaces/city-weather';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {


    public apiKey = 'a1f2ab50ae34639bcf782cdc54fcd195';
    public weatherURL = 'http://api.openweathermap.org/data/2.5/';

    constructor(private http: HttpClient) {}

    public getCityWeather(city): Observable<CityWeather> {
        return Observable.create((observer) => {
            const queryURL = this.urlBuilder(city, 'weather');
            this.http.get(queryURL).subscribe((data: CityWeatherServer) => {
                const cityWeather: CityWeather = { wind: null, temperature: null, weather: null };
                cityWeather.wind = data.wind.speed;
                cityWeather.temperature = Math.round(data.main.temp * 10) / 10;
                cityWeather.weather = data.weather[0].main;
                observer.next(cityWeather);
            });
        });
    }

    public getCityForecast(city): Observable<CityWeather> {
        return Observable.create((observer) => {
            const queryURL = this.urlBuilder(city, 'weather');
            this.http.get(queryURL).subscribe((data: CityWeatherServer) => {
                const cityWeather: CityWeather = { wind: null, temperature: null, weather: null };
                cityWeather.wind = data.wind.speed;
                cityWeather.temperature = Math.round(data.main.temp * 10) / 10;
                cityWeather.weather = data.weather[0].main;
                observer.next(cityWeather);
            });
        });
    }

    private urlBuilder(city, dataType): string {
        return this.weatherURL + dataType + '?q=' + city + '&appid=' + this.apiKey + '&units=metric';
    }

}
