import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CovidService {
  api_url = environment.api_url;
  covidDetailsByCountry: any = [];
  selectedCountryStatistics;
  editedData;
  constructor(private http: HttpClient) {}

  getAllCovidDetails(): Observable<any> {
    return this.http.get(this.api_url + `/v2/all`);
  }

  getAllCovidDetailsByCountry(){
    return this.http.get(this.api_url + `/v2/countries`).pipe(map((statistics)=>{
      this.covidDetailsByCountry = statistics;
      return this.covidDetailsByCountry;
    }))
  }
  getMappedCovidDetails() {
    return this.covidDetailsByCountry;
  }

  isUserLoggedIn() {
    return localStorage.getItem('username');
  }

  sendSelectedCountryDetails(selectedValues) {
    this.selectedCountryStatistics = selectedValues;
  }

  getSelectedCountryDetails() {
    return this.selectedCountryStatistics;
  }

  sendEditedCovidDetail(editedValues) {
    this.editedData = editedValues;
    this.covidDetailsByCountry.map((covidDetails)=>{
      if(editedValues.country === covidDetails.country) {
      covidDetails.cases = +editedValues.cases;
      covidDetails.deaths = +editedValues.deaths;
      covidDetails.recovered = +editedValues.recovered;
      covidDetails.tests = +editedValues.tests;
    }
      return covidDetails;
    })
  }
}




