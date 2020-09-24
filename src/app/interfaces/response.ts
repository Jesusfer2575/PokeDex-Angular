import { IPokemon } from './pokemon';

export interface IResponse {
  count: number;
  results: IPokemon[];
  next: string;
  previous: any;
}