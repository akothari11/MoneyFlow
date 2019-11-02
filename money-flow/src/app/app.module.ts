import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { BudgetComponent } from './budget/budget.component';
import { EmergencyFundComponent } from './emergency-fund/emergency-fund.component';
import { EmployerFundComponent } from './employer-fund/employer-fund.component';
import { DebtComponent } from './debt/debt.component';
import { SavingsComponent } from './savings/savings.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    BudgetComponent,
    EmergencyFundComponent,
    EmployerFundComponent,
    DebtComponent,
    SavingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
