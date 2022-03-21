import { createReducer } from "@ngrx/store";
import { Region } from "src/app/models/region.model";

export interface RegionState {
    regions:ReadonlyArray<Region>;
   
}

const initialiseRegions: Region[] = [{ "name": "Europe" }, { "name": "Asia" }]

export const regionReducer = createReducer<Region[]>(initialiseRegions);