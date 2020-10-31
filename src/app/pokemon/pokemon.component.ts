import { Component, Input } from '@angular/core';
import { ResponseSinglePokemon } from '../interfaces/pokemon';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  // Inputs work like props
  @Input('data') pokemon: ResponseSinglePokemon;

  constructor() { }

}
