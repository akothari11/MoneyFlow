import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
