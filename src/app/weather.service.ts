import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {


    public apiKey = 'a1f2ab50ae34639bcf782cdc54fcd195';
    public weatherURL = 'http://api.openweathermap.org/data/2.5/';

    constructor(private http: HttpClient) {
        this.getCityWeather('London').subscribe((data) => {
            console.log(data);
        });
    }

    public getCityWeather(city): Observable<object> {
        const queryURL = this.urlBuilder(city, 'weather');
        return this.http.get(queryURL);
    }

    private urlBuilder(city, dataType): string {
        return this.weatherURL + dataType + '?q=' + city + '&appid=' + this.apiKey;
    }

}
