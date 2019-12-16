export interface PokeApiResults {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
