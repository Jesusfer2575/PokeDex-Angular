import { Action } from '@ngrx/store';
import { Pokemong } from './../models/pokemong.model';
import * as PokemongActions from './../actions/pokemong.actions';

const initialState: Pokemong = {
  name: 'ditto',
  url: 'https://pokeapi.co/api/v2/pokemon/132/encounters',
};

export function reducer(state: Pokemong[] = [initialState], action: PokemongActions.Actions) {

  switch(action.type) {
      case PokemongActions.ADD_POKEMONG:
          return [...state, action.payload];

      case PokemongActions.REMOVE_POKEMONG:
        const remainPokemongs = state.filter(poke => poke.name !== action.payload);
        return [...remainPokemongs];
        
      default:
          return state;
  }

}