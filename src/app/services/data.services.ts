import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private url = 'https://jama2210.github.io/alysgym-json/clases.json';

  constructor(private http: HttpClient) {}

  getClases(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}