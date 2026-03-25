import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../../../environments/environments';
import { CharacterResponse, Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<CharacterResponse> {
    return this._http.get<CharacterResponse>(`${enviroments.apiUrl}/character`);
  }

  getCharactersByName(name: string): Observable<CharacterResponse> {
    return this._http.get<CharacterResponse>(`${enviroments.apiUrl}/character`, { params: { name } });
  }

  getCharacterById(id: number): Observable<Character> {
    return this._http.get<Character>(`${enviroments.apiUrl}/character/${id}`);
  }

  getNextPage(url: string): Observable<CharacterResponse> {
    return this._http.get<CharacterResponse>(url);
  }

  getPreviousPage(url: string): Observable<CharacterResponse> {
    return this._http.get<CharacterResponse>(url);
  }
}
