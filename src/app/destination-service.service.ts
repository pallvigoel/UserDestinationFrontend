import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationServiceService {
  constructor(private http: HttpClient) { }
  putUserDestination(data:any): void {

    var url = "http://localhost:3000/userDestination";
    this.http.post(url,data);

  }
}
