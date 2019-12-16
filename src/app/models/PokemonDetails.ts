export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  weight: number;
  height: number;
  sprites: Sprite;
  types: Types[];
  stats: Stats[];
}

export interface Sprite {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}

