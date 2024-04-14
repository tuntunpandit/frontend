import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(`${this.apiUrl}/customers`);
  }
}
