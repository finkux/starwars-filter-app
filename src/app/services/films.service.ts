import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private apiUrl: string = "https://swapi.dev/api";

  constructor(
    private httpClient: HttpClient
  ) { }

  getFilms(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/films');
  }

  getFilm(path: string): Observable<any> {
    return this.httpClient.get(path);
  }

  getCharacters(page: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/people/?page=' + page);
  }

  getCharactersPath(path: string): Observable<any> {
    return this.httpClient.get(path);
  }

  getInfoCharacter(id: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/people/' + id);
  }

  getVehicles(path: string): Observable<any> {
    return this.httpClient.get(path);
  }

  searchCharacter(term: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/people/?search=' + term);
  }

}