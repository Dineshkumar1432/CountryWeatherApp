import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Country } from "./Country/country";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Country],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('countryWeaterApp');

}
