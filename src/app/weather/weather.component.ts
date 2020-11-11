import { Component, OnInit } from '@angular/core';
import { Forecast } from 'app/models/forecast';
import { WeatherService } from 'app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather : Forecast[];

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {

    this.loadData();

  }

  loadData(){
    this.weatherService.getForecast().subscribe(data => {
      this.weather = data;
    });
  }

}
