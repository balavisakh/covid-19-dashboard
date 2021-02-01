import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  covidStatistics: Object;
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.getAllCovidData();
  }

  getAllCovidData() {
    this.covidService.getAllCovidDetails().subscribe((statistics)=>{
      this.covidStatistics = statistics;
    })
  }
}
