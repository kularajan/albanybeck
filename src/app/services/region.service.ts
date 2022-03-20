import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private _urlRegion: string ="/assets/data/regions.json"
 
  
  constructor(private http:HttpClient) { }

  getRegions(): Observable<Region[]>{
    return this.http.get<Region[]>(this._urlRegion);
  }
}
