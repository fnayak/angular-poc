import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoanApplicationFormApiResponse } from '../model/loan-application-form-response';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {

  loggedUserData!: IUser;

  constructor(private httpClient: HttpClient) { 
    const loggedData = sessionStorage.getItem('bankUser');
    if(loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  getMyApplication(customerId: number) {
      const result =  this.httpClient.get<ILoanApplicationFormApiResponse>(`https://projectapi.gerasim.in/api/BankLoan/GetMyApplications?customerId=${customerId}`)
      console.log("Result "+result);
      return result;
  }

  getApplicationsAssigned(bankEmployeeId: number) {
    return this.httpClient.get<ILoanApplicationFormApiResponse>(`https://projectapi.gerasim.in/api/BankLoan/GetApplicationAssigneedToMe?bankEmployeeId=${bankEmployeeId}`)
  }
}
