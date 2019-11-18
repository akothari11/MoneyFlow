import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { BudgetComponent } from './budget/budget.component';
import { EmergencyFundComponent } from './emergency-fund/emergency-fund.component';
import { EmployerFundComponent } from './employer-fund/employer-fund.component';
import { DebtComponent } from './debt/debt.component';
import { SavingsComponent } from './savings/savings.component';


const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'budget', component:  BudgetComponent},
  { path: 'emergency-fund', component: EmergencyFundComponent },
  { path: 'employer-fund', component: EmployerFundComponent},
  { path: 'debt', component: DebtComponent},
  { path: 'savings', component: SavingsComponent},
  { path: '**', redirectTo: '/info', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
