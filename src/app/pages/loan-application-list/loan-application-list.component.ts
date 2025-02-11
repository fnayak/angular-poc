import { ApplicationInitStatus, Component, inject } from '@angular/core';
import { ApplicationListService } from '../../services/application-list.service';
import { ILoanApplicationFormApiResponse } from '../../model/loan-application-form-response';
import { IApplicationList } from '../../model/application-list';

@Component({
  selector: 'app-loan-application-list',
  imports: [],
  templateUrl: './loan-application-list.component.html',
  styleUrl: './loan-application-list.component.css'
})
export class LoanApplicationListComponent {

  applicationListService = inject(ApplicationListService);
  applicationList: IApplicationList[] = [];

  constructor() {
    if(this.applicationListService.loggedUserData.role == "Customer") {
        this.getCustomerApplications();
    } else {
        this.getAssignedApplications();
    }
  }

  getCustomerApplications() {
    this.applicationListService.getMyApplication(this.applicationListService.loggedUserData.userId)
   .subscribe((res: ILoanApplicationFormApiResponse) => {
    console.log("Res Data : "+res.data.fullName);
    this.applicationList = res.data;
    console.log("Application List : "+this.applicationList);

   })
  }
  getAssignedApplications() {
    this.applicationListService.getApplicationsAssigned(this.applicationListService.loggedUserData.userId)
    .subscribe((res: ILoanApplicationFormApiResponse) => {
     this.applicationList = res.data;
 
    })
   }

}
