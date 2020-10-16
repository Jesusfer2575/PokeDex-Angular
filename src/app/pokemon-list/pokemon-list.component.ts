import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { IPokemon, ISinglePokemon } from '../interfaces/pokemon';
import { IResponse } from '../interfaces/response';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  title = 'Pokemon-client';
  logoImageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png';
  pokemonData: ISinglePokemon[] = [];
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private pokemon: PokemonService) {

    const getPokemons = async () => {
      const response = await fetch(this.url);
      const json = await response.json();
      const { results } = json;
      this.pokemonData = await Promise.all(results.map(async (itemPokemon: IPokemon) => {
        const { url } = itemPokemon;
        const resource = await fetch(url);
        const pokeData = await resource.json();
  
        return { name: pokeData.name, image: pokeData.sprites.front_default };
      }));
    }
    getPokemons();
    // pokemon.getPokemons().subscribe(async (res: IResponse) => {
    //   const { results } = res;
    // });
  }
}
