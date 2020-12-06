import { Pokemong } from './models/pokemong.model';

export interface AppState {
  readonly pokemong: Pokemong[];
}