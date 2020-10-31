import { Component, Input, Output, EventEmitter, Host } from '@angular/core';
import { ResponseSinglePokemon } from '../interfaces/pokemon';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  // Inputs work like props
  // Input is unidirectional, parent to child
  @Input('data') pokemon: ResponseSinglePokemon;
  // Output is unidirectional, child to parent with EventEmmiter
  @Output() delete = new EventEmitter();

  constructor(
    // Host allows us to get the parent component instance
    @Host() private _pokemonList: PokemonListComponent
  ) { 
    // console.log('Getting parent component from child ', this._pokemonList);
  }

  deletePokemon(name: string) {
    this.delete.emit(name);
  }
}
