import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  @ViewChild('budgetChart', { static: true}) jobDoughnutChart: ElementRef;

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

  // tslint:disable-next-line: object-literal-key-quotes
  public chartStyle = {'display': 'none'};
  // tslint:disable-next-line: object-literal-key-quotes
  public budgetFormStyle = {'display': 'block'};
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
    this.invalidSalary = !this.salary ? true : false;
    this.invalidHousingExpense = !this.housingExpense ? true : false;
    this.invalidFoodExpense = !this.foodExpense ? true : false;
    this.invalidEssentialBills = !this.essentialBills ? true : false;
    this.invalidIncomeExpense = !this.incomeExpenses ? true : false;
    this.invalidHealthCare = !this.healthCare ? true : false;
    this.invalidDebtPayment = !this.minDebtPayments ? true : false;

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
