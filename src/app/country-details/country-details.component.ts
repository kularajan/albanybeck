import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../models';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() public selectedCountry: Country;


  constructor() { 
   this.selectedCountry=({} as any) as Country;
   console.log(this.selectedCountry.currencies);
  }

  ngOnInit(): void {
    console.log(this.selectedCountry.currencies);
  }

  isCountrySelected() {
    return this.selectedCountry.name !== undefined;
  }

}
