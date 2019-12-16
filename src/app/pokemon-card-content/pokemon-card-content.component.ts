import { Component, OnInit, Input } from '@angular/core';
import { PokeApiService } from '../services/PokeApi.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-pokemon-card-content',
  templateUrl: './pokemon-card-content.component.html',
  styleUrls: ['./pokemon-card-content.component.css']
})
export class PokemonCardContentComponent implements OnInit {
  @Input() pokemonUrl: string;
  pokemonDetails;

  constructor(
    private pokeApiService: PokeApiService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.pokeApiService.setUrl(this.pokemonUrl);
    this.pokeApiService.getPokemonDetails().subscribe(response => {
      this.pokemonDetails = response;
    });
  }

  showPokemonDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = this.pokemonDetails;
    this.dialog.open(PokemonDetailsComponent, dialogConfig);
  }
}
