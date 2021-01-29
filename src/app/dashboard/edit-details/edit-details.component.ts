import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { CovidService } from '../../services/covid.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  selectedCountryStatistics;

  cases = new FormControl('', [Validators.required])
  deaths = new FormControl('', [Validators.required])
  recovered = new FormControl('', [Validators.required])
  tests = new FormControl('', [Validators.required])
  constructor(private covidService: CovidService, private fb: FormBuilder, private router: Router) { }

  statistics = this.fb.group({
    cases: this.cases,
    deaths: this.deaths,
    recovered: this.recovered,
    tests: this.tests,
  })
  ngOnInit(): void {
    this.getSelectedCountryDetails();
    this.setValuesInForm();
  }

  getSelectedCountryDetails() {
    this.selectedCountryStatistics = this.covidService.getSelectedCountryDetails();
    // console.log(this.selectedCountryStatistics,"selected country");
  }

  setValuesInForm() {
    this.statistics.patchValue(this.selectedCountryStatistics);
    // console.log(this.statistics.patchValue(this.selectedCountryStatistics),"patch")
    // this.selectedCountryStatistics.cases = this.statistics.value.cases;
  }

  onSubmit() {
    console.log(this.statistics.value,"l");
    // console.log(this.covidService.covidDetailsByCountry,"cou");
    this.covidService.sendEditedCovidDetail(this.statistics.value);
    // console.log(this.covidService.selectedCountryStatistics,"serv");
    this.router.navigate(['dashboard/statistics']);
  }

}
