import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';

import { PokeApiService } from '../services/PokeApi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() typesUrl: any;
  @Input() searchInput: any;
  apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=802';
  prevTypesUrl;
  prevSearchInput;
  count = 20;
  index = 0;
  max = 0;
  hasMaxed = false;
  prevDisabled: boolean;
  nextDisabled: boolean;
  pokemonList;
  pokemonTypeList;
  breakpoint: number;
  notFound = false;
  searching = false;

  constructor(
    private pokeApiService: PokeApiService,
  ) { }

  ngOnInit() {
    this.getDefaultResults();
    this.prevDisabled = true;
    this.nextDisabled = false;
    this.calculateColumns();
  }

  onResize() {
    this.calculateColumns();
  }

  calculateColumns() {
    if (window.innerWidth > 1100) {
      this.breakpoint = 4;
    } else if (window.innerWidth > 800) {
      this.breakpoint = 3;
    } else if (window.innerWidth > 600) {
      this.breakpoint = 2;
    } else if (window.innerWidth > 400) {
      this.breakpoint = 1;
    }
  }

  prevResults() {
    window.scrollTo(0, 0);
    this.nextDisabled = false;
    this.index -= this.count;
    if (this.index === 0) {
      this.prevDisabled = true;
    }
    if (this.hasMaxed) {
      this.hasMaxed = false;
    }
  }

  nextResults() {
    window.scrollTo(0, 0);
    this.prevDisabled = false;
    this.index += this.count;
    if (this.index + this.count > this.max) {
      this.nextDisabled = true;
      this.hasMaxed = true;
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges() {
    if (this.prevTypesUrl !== this.typesUrl || this.prevSearchInput !== this.searchInput) {
      this.index = 0;
      this.prevDisabled = true;
      this.nextDisabled = false;
      if (this.typesUrl !== undefined) {
        if (this.typesUrl === '') {
          this.getDefaultResults();
        } else {
          this.pokeApiService.setUrl(this.typesUrl);
          this.pokeApiService.getPokeApiTypes().subscribe(response => {
            this.pokemonTypeList = response;
            this.max = this.pokemonTypeList.pokemon.length;
          });
        }
      }
      if ((this.prevSearchInput !== this.searchInput) && this.searchInput !== '') {
        this.searching = true;
      } else { this.searching = false; }
      this.prevTypesUrl = this.typesUrl;
      this.prevSearchInput = this.searchInput;
    }
  }

  getDefaultResults() {
    this.pokeApiService.setUrl(this.apiUrl);
    this.pokeApiService.getPokeApiResults().subscribe(response => {
      this.pokemonList = response;
      this.max = this.pokemonList.results.length;
    });
  }

}
