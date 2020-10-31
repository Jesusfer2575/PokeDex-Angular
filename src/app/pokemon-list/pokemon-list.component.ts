import { PokeAPIService } from './../services/pokeapi.service';
import { Component } from '@angular/core';
import { Response, Pokemon, ResponseSinglePokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  logoImageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png';
  pokemons: Pokemon[] = [];
  singlePokemons: ResponseSinglePokemon[] = [];

  constructor(private apiService: PokeAPIService) {
    apiService.getPokemons('?limit=10').subscribe(async (response: Response) => {
      const { results } = response;
      console.log(results);
      this.pokemons = [...results];
    });
    // const getPokemons = async () => {
    //   const response = await fetch(this.url);
    //   const json = await response.json();
    //   const { results } = json;
    //   this.pokemonData = await Promise.all(results.map(async (itemPokemon: IPokemon) => {
    //     const { url } = itemPokemon;
    //     const resource = await fetch(url);
    //     const pokeData = await resource.json();
  
    //     return { name: pokeData.name, image: pokeData.sprites.front_default, shiny: pokeData.sprites.front_shiny };
    //   }));
    // }
    // getPokemons();
  }

  showAlert(pokemonName) {
    console.log(pokemonName);
  }

  getPokemonsInfo() {
    this.pokemons && this.pokemons.map((item: Pokemon) => {
      const { url } = item;
      this.apiService.getPokemon(url).subscribe(async (response: ResponseSinglePokemon) => {
        this.singlePokemons.push(response);
      });
    });
    console.log(this.singlePokemons);
  }
}
