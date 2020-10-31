import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, ResponseSinglePokemon } from '../interfaces/pokemon';

@Injectable({
  // This codes allows the service avoid to call it from the module
  providedIn: 'root'
})
export class PokeAPIService {
  url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(uri: string): Observable<Response> {
    return this.http.get<Response>(`${this.url}/${uri}`); 
  }

  getPokemon(uri: string): Observable<ResponseSinglePokemon> {
    return this.http.get<ResponseSinglePokemon>(`${uri}`);
  }
}
