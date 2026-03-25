import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocation(): Observable<Location> {
    return this.http.get<Location>(`${enviroments.apiUrl}/location`);
  }
}
