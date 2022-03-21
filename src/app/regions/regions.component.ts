import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { AppState } from '../app-state'
import { Region, Country } from '../models';
import { RegionService, CountryService } from '../services';
import { getRegionCountries } from '../store/actions';
import { regionSelector, countrySelector } from '../store/selector';
import { RegionState, CountryState } from '../store/reducers';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
  // encapsulation : ViewEncapsulation.ShadowDom
})
export class RegionsComponent implements OnInit {
  countries$: Observable<Country>[] =[];
  regions$ = this.regionStore.pipe(select(regionSelector));
 
  public countries: Country[] = [];
  public selectedCountryName: string = "";
  public selectedRegion: string = "";

  constructor(private regionStore: Store<RegionState>, private countryStore: Store<CountryState>, private regionService: RegionService, private countryService: CountryService) {
    
   }

  ngOnInit(): void {
      //  this.countries$ = this.countryStore.pipe(select(countrySelector));
  }

  changeRegion(region: any) {
    this.selectedRegion = region.target.value;
    this.selectedCountryName = "";
    this.countryService.getCountries(this.selectedRegion).subscribe(data => this.countries = data);
    this.countryStore.dispatch(getRegionCountries({ query: region.target.value }));
    // this.countries$ = this.countryStore.pipe(select(countrySelector));
    
    console.log(this.countries);
  }

  isRegionSelected() {
    return this.selectedRegion !== "";
  }

  changeCountry(country: any) {
    this.selectedCountryName = country.target.value;
  }

  getSelectedCountryDetail() {
    if (this.selectedCountryName !== '') {
      return this.countries.filter(i => i.name === this.selectedCountryName)[0];
    } else {
      return ({} as any) as Country;
    }
  }


}



