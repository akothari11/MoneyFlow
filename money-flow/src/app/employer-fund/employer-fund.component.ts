import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employer-fund',
  templateUrl: './employer-fund.component.html',
  styleUrls: ['./employer-fund.component.scss']
})
export class EmployerFundComponent implements OnInit {
  public employerTip: boolean;
  constructor(private locationService: Location) { }

  ngOnInit() {
  }

  public showEmployerTip(): void {
    this.employerTip = true;
  }

  public showEmployerQuestion(): void {
    this.employerTip = false;
  }
  /**
   * Routes user to previous page
   */
  public goBack(): void {
    this.locationService.back();
  }

}
