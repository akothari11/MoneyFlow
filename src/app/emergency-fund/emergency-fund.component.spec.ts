import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFundComponent } from './emergency-fund.component';

describe('EmergencyFundComponent', () => {
  let component: EmergencyFundComponent;
  let fixture: ComponentFixture<EmergencyFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
