import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country.html',
  styleUrls: ['./country.css'] // ✅ FIXED
})
export class Country implements OnInit {

  countryName = '';
  countries: any[] = [];
  filteredCountries: any[] = [];
  result: any = null;
  showDetails = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  onSearch() {
    const text = this.countryName.toLowerCase();

    this.filteredCountries = this.countries
      .filter(c => c.name.common.toLowerCase().includes(text))
      .slice(0, 10);
  }

 viewMore(country: any) {
   this.countryName = ''; 
  //  this.showDetails = true;
  //  this.result = null;
  this.api.getCountryAndWeather(country.cca3)   // ✅ use code
    .subscribe(data => {
      this.result = data;
      this.showDetails = true;
    });
}

  goBack() {
    this.showDetails = false;
    this.result = null;
  }

  trackByName(index: number, country: any) {
    return country.name.common;
  }
}