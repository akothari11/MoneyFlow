import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employer-fund',
  templateUrl: './employer-fund.component.html',
  styleUrls: ['./employer-fund.component.scss']
})
export class EmployerFundComponent implements OnInit {

  constructor(private locationService: Location) { }

  ngOnInit() {
  }

  /**
   * Routes user to previous page
   */
  public goBack(): void {
    this.locationService.back();
  }

}
