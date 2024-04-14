import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { LoginData, LoginFormData } from './auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  isUserLoggedin(): boolean {
    return true;
  }

  login(userData: LoginFormData): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.apiUrl}/auth/local`, userData);
  }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/auth/local/register`, userData);
  }
}
