import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getData() : Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
