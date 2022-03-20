import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //private _urlCountry: string = "/assets/data/countries.json"
  private _urlCountry:string="https://restcountries.com/v2/region";
  
  constructor(private http: HttpClient) { }
  
  getCountries(region:string): Observable<Country[]> {
     return this.http.get<Country[]>(this._urlCountry + "/" + region);
  }
}
