import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-emergency-fund',
  templateUrl: './emergency-fund.component.html',
  styleUrls: ['./emergency-fund.component.scss']
})
export class EmergencyFundComponent implements OnInit {

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
