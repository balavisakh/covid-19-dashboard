import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatisticsComponent } from './country-statistics.component';

describe('CountryStatisticsComponent', () => {
  let component: CountryStatisticsComponent;
  let fixture: ComponentFixture<CountryStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
