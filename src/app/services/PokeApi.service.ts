import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeApiResults } from '../models/PokeApiResults';
import { PokeApiTypes } from '../models/PokeApiTypes';
import { PokemonDetails } from '../models/PokemonDetails';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  url: string;

  constructor(
    private http: HttpClient
  ) { }

  setUrl(url: string) {
    this.url = url;
  }

  getPokeApiResults(): Observable<PokeApiResults[]> {
    return this.http.get<PokeApiResults[]>(this.url);
  }

  getPokeApiTypes(): Observable<PokeApiTypes[]> {
    return this.http.get<PokeApiTypes[]>(this.url);
  }

  getPokemonDetails(): Observable<PokemonDetails[]> {
    return this.http.get<PokemonDetails[]>(this.url);
  }

}
