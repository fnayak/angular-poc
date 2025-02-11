import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoanApplicationForm } from '../model/loan-application-form';
import { ILoanApplicationFormApiResponse } from '../model/loan-application-form-response';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationFormService {

  constructor(private httpClient: HttpClient) { }

  onSaveLoanApplicationForm(obj: ILoanApplicationForm) {
    return this.httpClient.post<ILoanApplicationFormApiResponse>("https://projectapi.gerasim.in/api/BankLoan/AddNewApplication", obj)

  }
}
