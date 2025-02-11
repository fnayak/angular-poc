import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  httpClient = inject(HttpClient);
  
  customerObj: any = {
    "userId": 0,
    "userName": '',
    "emailId": '',
    "fullName": '',
    "password": ''
  }

  onRegister() {
    const apiUrl = "https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post<any>(apiUrl, this.customerObj, { headers })
      .subscribe({
        next: (res) => {
          if (res?.result) {
            alert("Customer registration successful");
          } else {
            alert(res.message || "Registration failed");
          }
        },
        error: (error) => {
          console.error("Error registering customer:", error);
          alert("Network Error or API issue");
        }
      });
  }

}
