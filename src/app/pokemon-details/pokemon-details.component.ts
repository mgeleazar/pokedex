import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonDetails } from '../models/PokemonDetails';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonDetails: PokemonDetails;

  constructor(
    private dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) pokemonDetails
    ) {
    this.pokemonDetails = pokemonDetails;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
