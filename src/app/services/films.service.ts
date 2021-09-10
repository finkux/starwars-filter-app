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

  getCharacters(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/people');
  }

  getInfoCharacter(path: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/people/' + path);
  }

}
