import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerFundComponent } from './employer-fund.component';

describe('EmployerFundComponent', () => {
  let component: EmployerFundComponent;
  let fixture: ComponentFixture<EmployerFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
