import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { CovidService } from '../../services/covid.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  selectedCountryStatistics;

  cases = new FormControl('', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]);
  deaths = new FormControl('', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]);
  recovered = new FormControl('', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]);
  tests = new FormControl('', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]);
  constructor(
    private covidService: CovidService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  statistics = this.fb.group({
    cases: this.cases,
    deaths: this.deaths,
    recovered: this.recovered,
    tests: this.tests,
    country: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.getSelectedCountryDetails();
    this.setValuesInForm();
  }

  getSelectedCountryDetails() {
    this.selectedCountryStatistics = this.covidService.getSelectedCountryDetails();
    // console.log(this.selectedCountryStatistics,"selected country");
  }

  setValuesInForm() {
    if(this.selectedCountryStatistics){
    this.statistics.patchValue(this.selectedCountryStatistics);
    }
    else {
      this.router.navigate(['dashboard/statistics']);
    }
    // console.log(this.statistics.patchValue(this.selectedCountryStatistics),"patch")
    // this.selectedCountryStatistics.cases = this.statistics.value.cases;
  }

  onSubmit() {
    if(this.statistics.valid) {
      this.covidService.sendEditedCovidDetail(this.statistics.value);
      this.router.navigate(['dashboard/statistics']);
    }
    return;
  }

  cancel() {
    this.router.navigate(['dashboard/statistics']);
  }

  casesErrorMessage() {
    if (this.cases.hasError('required')) {
      return 'You must enter cases value';
    }
    return 'only numbers allowed for cases';
  }

  deathsErrorMessage() {
    if (this.deaths.hasError('required')) {
      return 'You must enter death value';
    }
    return 'only numbers allowed for deaths';

  }

  recoveredErrorMessage() {
    if (this.recovered.hasError('required')) {
      return 'You must enter recovered value';
    }
    return 'only numbers allowed for recovered';

  }

  testsErrorMessage() {
    if (this.tests.hasError('required')) {
      return 'You must enter tests value';
    }
    return 'only numbers allowed for tests';
  }
}
