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
  public netAmount: number;

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
    this.invalidSalary = isNaN(this.salary) || this.salary < 0;
    this.invalidHousingExpense = isNaN(this.housingExpense) || this.housingExpense < 0;
    this.invalidFoodExpense = isNaN(this.foodExpense) || this.foodExpense < 0;
    this.invalidEssentialBills = isNaN(this.essentialBills) || this.essentialBills < 0;
    this.invalidIncomeExpense = isNaN(this.incomeExpenses) || this.incomeExpenses < 0;
    this.invalidHealthCare = isNaN(this.healthCare) || this.healthCare < 0;
    this.invalidDebtPayment = isNaN(this.minDebtPayments) || this.minDebtPayments < 0;
    // tslint:disable-next-line: max-line-length
    if (!this.invalidSalary && !this.invalidHousingExpense && !this.invalidFoodExpense && !this.invalidEssentialBills && !this.invalidIncomeExpense && !this.invalidHealthCare && !this.invalidDebtPayment) {
      // tslint:disable-next-line: max-line-length
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

    const chart = new Chart(this.budgetDoughnutChart.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
         labels: ['Monthly Income', 'Essential Expenses'],
         datasets: [{
            label: 'Salary',
            data: [this.salary, 0],
            backgroundColor: '#98C1D9'
         }, {
            label: 'Housing Expenses',
            data: [0, this.housingExpense],
            backgroundColor: '#7B6D8D'
         }, {
            label: 'Food Expenses',
            data: [0, this.foodExpense],
            backgroundColor: '#95a5a6',
         }, {
            label: 'Essential Bills',
            data: [0, this.essentialBills],
            backgroundColor: '#F0B67F'
         }, {
            label: 'Income Expenses',
            data: [0, this.incomeExpenses],
            backgroundColor: '#5D8970'
         }, {
            label: 'Health Care Expenses',
            data: [0, this.healthCare],
            backgroundColor: '#EF6F6C'
         }, {
            label: 'Debt Payments',
            data: [0, this.minDebtPayments],
            backgroundColor: '#293241'
         }]
      },
      options: {
         legend: {
            position: 'right',
            labels: {
                fontSize: 18
              }
         },
         scales: {
            xAxes: [{
               stacked: true,
               ticks: {
                 fontSize: 18
               }
            }],
            yAxes: [{
               stacked: true,
               ticks: {
                fontSize: 18
              }
            }]
         }
      }
   });

    // tslint:disable-next-line: object-literal-key-quotes
    this.budgetFormStyle = {'display' : 'none'};
    // tslint:disable-next-line: object-literal-key-quotes
    this.chartStyle = {'display': 'block'};
  }

  public updateBudgetData() {
    // tslint:disable-next-line: object-literal-key-quotes
    this.chartStyle = {'display': 'none'};
    // tslint:disable-next-line: object-literal-key-quotes
    this.budgetFormStyle = {'display': 'block'};
  }

}
