import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  public salary: number;
  public housingExpense: number;
  public foodExpense: number;
  public essentialBills: number;
  public incomeExpenses: number;
  public healthCare: number;
  public minDebtPayments: number;

  public invalidSalary: boolean;
  public invalidHousingExpense: boolean;
  public invalidFoodExpense: boolean;
  public invalidEssentialBills: boolean;
  public invalidIncomeExpense: boolean;
  public invalidHealthCare: boolean;
  public invalidDebtPayment: boolean;
  constructor(private locationService: Location, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Routes user to previous page
   */
  public goBack(): void {
    this.locationService.back();
  }

  public validateForm(): void {
    console.log(this.salary);
    if (!this.salary) {
      this.invalidSalary = true;
    }
    else {
      this.invalidSalary = false;
    }

    if (!this.housingExpense) {
      this.invalidHousingExpense = true;
    }
    else {
      this.invalidHousingExpense = false;
    }

    if (!this.foodExpense) {
      this.invalidFoodExpense = true;
    }
    else {
      this.invalidFoodExpense = false;
    }

    if (!this.essentialBills) {
      this.invalidEssentialBills = true;
    }
    else {
      this.invalidEssentialBills = false;
    }

    if (!this.incomeExpenses) {
      this.invalidIncomeExpense = true;
    }
    else {
      this.invalidIncomeExpense = false;
    }

    if (!this.healthCare) {
      this.invalidHealthCare = true;
    }
    else {
      this.invalidHealthCare = false;
    }

    if (!this.minDebtPayments) {
      this.invalidDebtPayment = true;
    }
    else {
      this.invalidDebtPayment = false;
    }

  }
  public showChart(): void {
    const data = {
      budget: {
        income: this.salary,
        housingExpense: this.housingExpense,
        foodExpense: this.foodExpense,
        essentialBills: this.essentialBills,
        incomeExpenses: this.incomeExpenses,
        healthCare: this.healthCare,
        minDebtPayments: this.minDebtPayments,
      }
    };
    this.router.navigate(['emergency-fund', {budgetData: data}]);

  }

}
