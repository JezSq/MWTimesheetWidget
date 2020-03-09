import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Day } from '../data/day';

@Injectable({
  providedIn: 'root'
})
export class DayService{

  private daysUrl = "api/days";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getDays(): Observable<Day[]> {
    return this.http.get<Day[]>(this.daysUrl);
  }
}
