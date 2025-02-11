import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bank Loan Application';
  loggedUserData: any;
  constructor() {
    const loggedData = sessionStorage.getItem('bankUser');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }

  logout() {
    sessionStorage.removeItem('bankUser');
  }
}
