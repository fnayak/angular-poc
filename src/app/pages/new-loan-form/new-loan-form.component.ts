import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoanApplicationFormService } from '../../services/loan-application-form.service';
import { ILoanApplicationFormApiResponse } from '../../model/loan-application-form-response';
import { ApplicationListService } from '../../services/application-list.service';
@Component({
  selector: 'app-new-loan-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-loan-form.component.html',
  styleUrl: './new-loan-form.component.css'
})
export class NewLoanFormComponent {

  loanApplicationForm: FormGroup = new FormGroup({});
  formBuilder = inject(FormBuilder);
  newLoanAppFormService = inject(LoanApplicationFormService);
  applicationListService = inject(ApplicationListService);

  constructor() {
    this.initializeForm();
   
    if(this.applicationListService.loggedUserData != null) {

      this.loanApplicationForm.controls['customerId'].setValue(this.applicationListService.loggedUserData.userId);
    }
  }

  initializeForm() {
    this.loanApplicationForm = this.formBuilder.group({
    applicantID: [0],
    fullName: [''],
    applicationStatus: [''],
    panCard: [''],
    dateOfBirth: [''],
    email: [''],
    phone: [''],
    address: [''],
    city: [''],
    state: [''],
    zipCode: [''],
    annualIncome: [0],
    employmentStatus: [''],
    creditScore: [0],
    assets: [''],
    dateApplied: [new Date()],
    loans : this.formBuilder.array([this.createLoanGroup()]),
    customerId: [0]
    });
  }

  createLoanGroup(): FormGroup {
      return this.formBuilder.group({
        loanID: [0],
        applicantID: [0],
        bankName: [''],
        loanAmount: [0],
        emi: [0]
      })
      
    }

    onSave() {
      debugger;
      const formValue = this.loanApplicationForm.value;
      this.newLoanAppFormService.onSaveLoanApplicationForm(formValue)
      .subscribe((res: ILoanApplicationFormApiResponse) => {
        if(res.result) {
          alert("Loan application creation successful");
        } else {
          alert(res.message);
        }
      }, error => {
        alert("Network Error");
      });
    }

    get loanList(): FormArray {
      return this.loanApplicationForm.get('loans') as FormArray;
    }
 
    addNewLoan() {
      this.loanList.push(this.createLoanGroup());
    }

    removeLoan(index: number) {
      this.loanList.removeAt(index);
    }
 

}
