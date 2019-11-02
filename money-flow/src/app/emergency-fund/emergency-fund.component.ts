import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-emergency-fund',
  templateUrl: './emergency-fund.component.html',
  styleUrls: ['./emergency-fund.component.scss']
})
export class EmergencyFundComponent implements OnInit {
  public netExpenses: number;

  constructor(private locationService: Location, private router: ActivatedRoute) { }

  ngOnInit() {
    this.netExpenses = parseInt(this.router.snapshot.paramMap.get('amount'), 10);
  }

  /**
   * Routes user to previous page
   */
  public goBack(): void {
    this.locationService.back();
  }

}
