export interface Images {
  front_default: string;
  back_default: string;
  front_shiny: string;
}
export interface ResponseSinglePokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  order: number;
  sprites: Images;
  location_area_encounters: string;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Response {
  count: number;
  results: Pokemon[];
  next: string;
  previous: any;
}