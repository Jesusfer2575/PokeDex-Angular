import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  headers = new HttpHeaders().set('Type-content', 'application/json');

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    const url = `${this.url}?limit=151`;
    return this.http.get(url, {
      headers: this.headers
    });
  }

  getPokemonByName(name: string) {
    const url = `${this.url}/${name}`;
    return this.http.get(url, {
      headers: this.headers
    });
  }

  getPokemonByNumber(numberURL: string) {
    return this.http.get(numberURL, {
      headers: this.headers
    });
  }
}
