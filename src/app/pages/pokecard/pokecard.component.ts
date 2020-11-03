import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '@services/pokeapi.service';
import { ResponseSinglePokemon } from '@interfaces/pokemon';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent {
  pokemon: ResponseSinglePokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeAPI: PokeAPIService,
  ) { 
    
  }

  ngAfterContentInit() {
    (async () => {
      const namePokemon = await this.activatedRoute.snapshot.paramMap.get("name");
      await this.pokeAPI.getPokemon(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
        .subscribe((response: ResponseSinglePokemon) => {
          this.pokemon = { ...response };
        });
    })();
  }
}
