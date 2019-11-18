import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})
export class DebtComponent implements OnInit {
  public eFundTip: boolean;
  public debtTip: boolean;
  public moderateInterestDebtQuestion: boolean;
  public moderateInterestDebtTip: boolean;
  public debtHeader = true;
  public moderateDebtHeader: boolean;
  public seenHighDebtTip: boolean;
  constructor(private locationService: Location) { }

  ngOnInit() {
  }

  public showEFundTip() {
    this.eFundTip = true;
    this.debtTip = false;
    this.debtHeader = false;
    this.moderateDebtHeader = false;
    this.moderateInterestDebtTip = false;
    this.moderateInterestDebtQuestion = false;
  }

  public showDebtTip() {
    this.debtTip = true;
    this.seenHighDebtTip = true;
  }

  public showDebtQuestion() {
    this.debtTip = false;
    this.eFundTip = false;
    this.debtHeader = true;
  }

  public showModerateInterestQuestion() {
    this.eFundTip = false;
    this.debtTip = false;
    this.moderateInterestDebtQuestion = true;
    this.moderateDebtHeader = true;
  }

  public showModerateInterestDebtTip() {
    this.moderateInterestDebtQuestion = false;
    this.moderateInterestDebtTip = true;
  }
  /**
   * Routes user to previous page
   */
  public goBack(): void {
    this.locationService.back();
  }

}
