import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalReportComponent } from './periodical-report.component';

describe('PeriodicalReportComponent', () => {
  let component: PeriodicalReportComponent;
  let fixture: ComponentFixture<PeriodicalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
