import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Money Flow';
  public budgetActive: boolean;
  public eFundActive: boolean;
  public empFundActive: boolean;
  public debtActive: boolean;
  public savingsActive: boolean;
  public routes = ['budget', 'emergency-fund', 'employer-fund', 'debt', 'savings'];
  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      const activatedRoute: string = val.url;
      if (activatedRoute) {
        this.budgetActive = activatedRoute.indexOf(this.routes[0]) > 0;
        this.eFundActive = activatedRoute.indexOf(this.routes[1]) > 0;
        this.empFundActive = activatedRoute.indexOf(this.routes[2]) > 0;
        this.debtActive = activatedRoute.indexOf(this.routes[3]) > 0;
        this.savingsActive = activatedRoute.indexOf(this.routes[4]) > 0;
      }
  });

  }
  ngOnInit(): void {
    this.router.navigateByUrl('/info');
  }
}

