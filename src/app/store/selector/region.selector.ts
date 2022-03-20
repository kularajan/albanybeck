import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { Region } from "src/app/models/region.model";
import { RegionState } from "../reducers/region.reducers";

export const regionSelector = createSelector(
    (state:RegionState) => state.regions,(regions:ReadonlyArray<Region>) => regions
)
