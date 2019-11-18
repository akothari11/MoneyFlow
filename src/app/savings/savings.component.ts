import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  public savingsQuestionCard: boolean;
  public savingsAdvice: boolean;
  public savingsRetirementQuestion: boolean;
  public savings401kQuestion: boolean;
  public healthCareQuestion: boolean;
  public savings401kAdvice: boolean;
  public savingsIndividual401k: boolean;
  public savingsHealthCareAdvice: boolean;
  public savingsChildCareQuestion: boolean;
  public savingsChildCareAdvice: boolean;
  public finalCard: boolean;
  constructor(private locationService: Location) { }

  ngOnInit() {
  }

  public showSavingsQuestion() {
    this.savingsQuestionCard = true;
  }
  public answerSavingsQuestionTrue() {
    this.savingsQuestionCard = false;
    this.savingsAdvice = true;
    this.savingsRetirementQuestion = false;
    this.savings401kQuestion = false;
    this.healthCareQuestion = false;
    this.savings401kAdvice = false;
    this.savingsIndividual401k = false;
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }
  public answerSavingsQuestionFalse() {
    this.savingsAdvice = false;
    this.savingsRetirementQuestion = true;
    this.savings401kQuestion = false;
    this.healthCareQuestion = false;
    this.savings401kAdvice = false;
    this.savingsIndividual401k = false;
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerSavingsRetirementQuestionTrue() {
    this.healthCareQuestion = true;
    this.savings401kQuestion = false;
    this.savings401kAdvice = false;
    this.savingsIndividual401k = false;
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerSavingsRetirementQuestionFalse() {
    this.healthCareQuestion = false;
    this.savings401kQuestion = true;
    this.savings401kAdvice = false;
    this.savingsIndividual401k = false;
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerEmployer401kTrue() {
    this.savings401kQuestion = false;
    this.healthCareQuestion = false;
    this.savings401kAdvice = true;
    this.savingsIndividual401k = false;
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerEmployer401kFalse() {
    this.healthCareQuestion = false;
    this.savings401kAdvice = false;
    this.savingsIndividual401k = true;
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerHealthQuestionTrue() {
    this.healthCareQuestion = false;
    this.savingsHealthCareAdvice = true;
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerHealthQuestionFalse() {
    this.savingsHealthCareAdvice = false;
    this.savingsChildCareQuestion = true;
    this.savingsChildCareAdvice = false;
    this.finalCard = false;
  }

  public answerChildCareQuestionTrue() {
    this.savingsChildCareQuestion = false;
    this.savingsChildCareAdvice = true;
    this.finalCard = false;
  }

  public answerChildCareQuestionFalse() {
    this.finalCard = true;
    this.savingsChildCareAdvice = false;
  }

  /**
   * Routes user to previous page
   */
  public goBack(): void {
    this.locationService.back();
  }

}
