import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-component',
  standalone : true,
  imports: [CommonModule],
  //templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  template: `<h2>Data from Api<h2>
  <ul>
    <li *ngFor = "let item of data">{{item.title}}</li>
  </ul>
  `,
})
export class MyComponentComponent implements OnInit {
  data: any[] = [];
  constructor(private myService:MyServiceService) {}
  ngOnInit(): void {
    this.myService.getData().subscribe(response => {this.data = response})
  }

}
