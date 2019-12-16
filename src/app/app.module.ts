import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonTopBarComponent } from './pokemon-top-bar/pokemon-top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonCardContentComponent } from './pokemon-card-content/pokemon-card-content.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { FilterPipe } from './custom_pipes/Filter.pipe';
import { FilterWithTypePipe } from './custom_pipes/FilterWithType.pipe';

@NgModule({
   declarations: [
      AppComponent,
      PokemonTopBarComponent,
      PokemonListComponent,
      PokemonDetailsComponent,
      PokemonCardContentComponent,
      FilterPipe,
      FilterWithTypePipe,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', component: PokemonListComponent },
      ]),
      MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatGridListModule,
      MatCardModule,
      MatDialogModule,
      MatSelectModule,
      MatDividerModule,
      MatListModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [PokemonDetailsComponent]
})
export class AppModule { }
