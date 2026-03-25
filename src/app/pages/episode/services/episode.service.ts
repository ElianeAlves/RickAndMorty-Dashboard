import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../../../environments/environments';
import { EpisodeResponse } from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private _http: HttpClient) { }

  getEpisodes(): Observable<EpisodeResponse> {
    return this._http.get<EpisodeResponse>(`${enviroments.apiUrl}/episode`);
  }

  getNextPage(url: string): Observable<EpisodeResponse> {
    return this._http.get<EpisodeResponse>(url);
  }

  getPreviousPage(url: string): Observable<EpisodeResponse> {
    return this._http.get<EpisodeResponse>(url);
  }
}
