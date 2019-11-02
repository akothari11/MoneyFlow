import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public budgetData: any;

  constructor() { }

  public setBudgetData(data: any): void {
    this.budgetData = data;
  }

  public retrieveBudgetData(): any {
    return this.budgetData;
  }
}
