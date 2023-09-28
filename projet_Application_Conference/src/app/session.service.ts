import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private apiUrl = 'https://devfest-nantes-2018-api.cleverapps.io/sessions';

  constructor(private http: HttpClient) {}

  getSession(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
