import { Action } from '@ngrx/store';

export const TYPES = {
  SPANISH: 'SPANISH',
  ENGLISH: 'ENGLISH',
}

export interface appState {
  title: string;
  language?: string;
}

export const initialState = {
  title: 'Pokedex Redux Angular'
}

export function reducer(state: appState = initialState, action: Action) { 
  switch(action.type) {
    case TYPES.SPANISH:
      return {
        ...state,
        title: 'spanish'
      }
    case TYPES.ENGLISH:
      return {
        ...state,
        title: 'english'
      }
    default:
      return state;
  }
}