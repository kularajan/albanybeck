import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { regionReducer } from './store/reducers/region.reducers';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      regions:regionReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
