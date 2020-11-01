import { PokeAPIService } from '@services/pokeapi.service';
import { Component } from '@angular/core';
import { Response, Pokemon, ResponseSinglePokemon } from '@interfaces/pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  logoImageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png';
  pokemons: Pokemon[] = [];
  singlePokemons: ResponseSinglePokemon[] = [];
  errorMessageNotFound: boolean = false;

  constructor(private apiService: PokeAPIService) {
    apiService.getPokemons('?limit=8&offset=143').subscribe(async (response: Response) => {
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

  async getPokemonsInfo() {
    if (this.pokemons.length !== 0) {
      await Promise.all(this.pokemons.map((item: Pokemon) => {
        const { url } = item;
        this.apiService.getPokemon(url).subscribe((response: ResponseSinglePokemon) => {
          this.singlePokemons.push(response);
        });
      }));

      console.log(this.singlePokemons);
    }
  }

  deletePokemon(name: string) {
    this.singlePokemons = this.singlePokemons.filter(poke => poke.name !== name);
  }

  findPokemon(name: string) {
    const isPokemonInCollection = this.singlePokemons.find(poke => poke.name === name.toLowerCase());
    
    if (!isPokemonInCollection) {
      this.errorMessageNotFound = true;
      setTimeout(() => {
        this.errorMessageNotFound = false;
      }, 3000);
    }

    if (this.singlePokemons.length !== 0) {
      this.singlePokemons = this.singlePokemons.filter(poke => poke.name === name.toLowerCase());
    }
  }
}
