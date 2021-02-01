import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-country-statistics',
  templateUrl: './country-statistics.component.html',
  styleUrls: ['./country-statistics.component.css'],
})
export class CountryStatisticsComponent implements AfterViewInit {
  countryWiseCovidStatus: any = [];
  country;
  selectedSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  countryWiseCovidStatusObs: Observable<any>;
  constructor(private covidService: CovidService, private router: Router, private cdref: ChangeDetectorRef) {}

  ngAfterViewInit() {
    let editedValue = this.getEditedValues();
    if (!editedValue.length) {
      this.getAllCovidDetailsByCountry();
    } else {
      this.setDataSource(editedValue);
    }
    this.cdref.detectChanges();
  }

  getAllCovidDetailsByCountry() {
    this.covidService.getAllCovidDetailsByCountry().subscribe(() => {
      this.setDataSource(this.getEditedValues());
    });
  }
  setDataSource(value) {
    // this.countryWiseCovidStatus = value;
    this.dataSource = new MatTableDataSource<any>(value);
    this.dataSource.paginator = this.paginator;
    this.countryWiseCovidStatusObs = this.dataSource.connect();
  }

  editDetails(countryDetails) {
    this.covidService.sendSelectedCountryDetails(countryDetails);
    this.router.navigate(['dashboard/edit-details']);
  }

  sort(sortData) {
    sortData = JSON.parse(sortData);
    // console.log(JSON.parse(sortData));
    this.countryWiseCovidStatus.sort((a, b) => {
      if (a[sortData.field] < b[sortData.field]) {
        return -1;
      }
      if (a[sortData.field] > b[sortData.field]) {
        return 1;
      }
      return 0;
      // return a[sortData.field] - b[sortData.field];
    });
    this.countryWiseCovidStatusObs = this.countryWiseCovidStatus;
    this.dataSource = new MatTableDataSource<any>(this.countryWiseCovidStatus);
    this.countryWiseCovidStatusObs = this.dataSource.connect();
  }

  getSearchValue(searchValue) {
    let temp = this.countryWiseCovidStatus.filter((c)=>{
      if(c.country.toLowerCase().includes(searchValue.target.value)){
        return c;
      }
    });
    this.setDataSource(temp);
  }

  getEditedValues() {
    this.countryWiseCovidStatus = this.covidService.getMappedCovidDetails();
    return this.countryWiseCovidStatus;
  }
}
