import { Pipe, PipeTransform } from '@angular/core';
import { PokeApiTypes } from '../models/PokeApiTypes';

@Pipe({
  name: 'filterwithtype'
})
export class FilterWithTypePipe implements PipeTransform {

  transform(items: PokeApiTypes['pokemon'], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter( item => {
      return item.pokemon.name.toLowerCase().includes(searchText);
    });
  }
}
