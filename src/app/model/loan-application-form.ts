export interface ILoanApplicationForm {
    applicantID: number
    fullName: string
    applicationStatus: string
    panCard: string
    dateOfBirth: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    annualIncome: number
    employmentStatus: string
    creditScore: number
    assets: string
    dateApplied: string
    loans: IBankLoan[]
    customerId: number
  }

  export interface IBankLoan {
    loanID: number
    applicantID: number
    bankName: string
    loanAmount: number
    emi: number
  }