import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../models/forecast';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  getForecast(): Observable<Forecast[]> {

    var url = this.configService.ApiRoot + "/weatherforecast";
    return this.httpClient.get<Forecast[]>(url);
  }
}
