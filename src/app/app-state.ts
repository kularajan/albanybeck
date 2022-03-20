import { Country } from "./models/country.model";

export interface AppState{
    regions:string[];
    countries:Country[];
    country:Country;
}