import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { AppState } from '../app-state'
import { Region } from '../models/region.model';
import { Country } from '../models/country.model';
import { RegionService } from '../services/region.service';
import { CountryService } from '../services/country.service';
import { RegionState } from '../store/reducers/region.reducers';
import { regionSelector } from '../store/selector/region.selector';


@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
  // encapsulation : ViewEncapsulation.ShadowDom
})
export class RegionsComponent implements OnInit {


  regions$ = this.store.pipe(select(regionSelector));
  public countries: Country[] = [];
  public selectedCountryName: string = "";
  public selectedRegion: string = "";


  constructor(private store: Store<RegionState>, private regionService: RegionService, private countryService: CountryService) { }

  ngOnInit(): void {

  }

  changeRegion(region: any) {
    this.selectedRegion = region.target.value;
    this.selectedCountryName="";
    this.countryService.getCountries(this.selectedRegion).subscribe(data => this.countries = data);

  }

  isRegionSelected() {
    return this.selectedRegion !== "";
  }

  changeCountry(country: any) {
    this.selectedCountryName = country.target.value;
  }

  getSelectedCountryDetail() {
    if (this.selectedCountryName !== '') {
      return this.countries.filter(i=> i.name===this.selectedCountryName)[0];
    } else {
      return ({} as any) as Country;
    }
  }


}
