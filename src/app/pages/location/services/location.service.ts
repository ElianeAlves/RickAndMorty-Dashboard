import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../../../environments/environments';
import { LocationResponse } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  getLocation(): Observable<LocationResponse> {
    return this._http.get<LocationResponse>(`${enviroments.apiUrl}/location`);
  }

  getNextPage(url: string): Observable<LocationResponse> {
    return this._http.get<LocationResponse>(url);
  }

  getPreviousPage(url: string): Observable<LocationResponse> {
    return this._http.get<LocationResponse>(url);
  }
}
