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

  @ViewChild('budgetChart', { static: true}) budgetDoughnutChart: ElementRef;

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
  private netAmount: number;

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
    this.invalidSalary = !this.salary ? true : false;
    this.invalidHousingExpense = !this.housingExpense ? true : false;
    this.invalidFoodExpense = !this.foodExpense ? true : false;
    this.invalidEssentialBills = !this.essentialBills ? true : false;
    this.invalidIncomeExpense = !this.incomeExpenses ? true : false;
    this.invalidHealthCare = !this.healthCare ? true : false;
    this.invalidDebtPayment = !this.minDebtPayments ? true : false;
    if (!this.invalidSalary && !this.invalidHousingExpense && !this.invalidFoodExpense && !this.invalidEssentialBills && !this.invalidIncomeExpense && !this.invalidHealthCare && !this.invalidDebtPayment) {
      this.netAmount = this.salary - (this.housingExpense + this.foodExpense + this.essentialBills + this.incomeExpenses + this.healthCare + this.minDebtPayments);
      this.createChart();
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

  public createChart(): void {
    console.log('test');
    const doughnutChart = new Chart(this.budgetDoughnutChart.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: [
          'Salary',
          'Housing Expenses',
          'Food Expenses',
          'Essential Bills',
          'Income Expenses',
          'Health Care',
          'Debt Payments'
        ],
        datasets: [{
          backgroundColor: [
            '#98C1D9',
            '#7B6D8D',
            '#95a5a6',
            '#F0B67F',
            '#5D8970',
            '#EF6F6C',
            '#293241'
          ],
          data: [
            this.salary,
            this.housingExpense,
            this.foodExpense,
            this.essentialBills,
            this.incomeExpenses,
            this.healthCare,
            this.minDebtPayments
          ]
        }]
      }
    });
    this.budgetFormStyle = {'display' : 'none'};
    this.chartStyle = {'display': 'block'};
  }

  public updateBudgetData() {
    console.log('test');
    this.chartStyle = {'display': 'none'};
    this.budgetFormStyle = {'display': 'block'};
  }

}
