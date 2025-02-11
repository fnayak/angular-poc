import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  httpClient = inject(HttpClient);
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  })

  onLogin() {
    const apiUrl = "https://projectapi.gerasim.in/api/BankLoan/login";
    const formValue = this.loginForm.value;
    this.httpClient.post<any>(apiUrl, formValue)
    .subscribe({
      next: (res) => {
        if (res?.result) {
          sessionStorage.setItem("bankUser", JSON.stringify(res.data));
          this.router.navigateByUrl("loan-application-list");
        } else {
          alert(res.message || "Login failed");
        }
      },
      error: (error) => {
        console.error("Error logging customer:", error);
        alert("Network Error or API issue");
      }
    })
  }

}
