import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  private apiUrl = 'https://devfest-nantes-2018-api.cleverapps.io/speakers';

  constructor(private http: HttpClient) {}

  getSpeakers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
