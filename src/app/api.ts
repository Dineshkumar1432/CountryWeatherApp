import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private weatherApiKey = 'bd5699e7efe86405cc667df8704058e7';

  constructor(private http: HttpClient) {}

  // ✅ Get all countries (added cca3 + latlng)
  getAllCountries() {
    return this.http.get<any[]>(
      'https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3,latlng'
    );
  }

  // ✅ Get exact country + weather using cca3
  getCountryAndWeather(code: string) {
    return this.http.get<any[]>(`https://restcountries.com/v3.1/alpha/${code}`)
      .pipe(
        map(country => {
          const data = country[0];
          return {
            name: data.name.common,
            capital: data.capital?.[0],
            population: data.population,
            region: data.region,
            lat: data.latlng[0],
            lon: data.latlng[1],
            flag: data.flags.png
          };
        }),
        switchMap(country =>
          this.http.get<any>(
            `https://api.openweathermap.org/data/2.5/weather?lat=${country.lat}&lon=${country.lon}&appid=${this.weatherApiKey}&units=metric`
          ).pipe(
            map(weather => ({
              ...country,
              temperature: weather.main.temp,
              description: weather.weather[0].description
            }))
          )
        )
      );
  }
}