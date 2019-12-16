import { Pipe, PipeTransform } from '@angular/core';
import { PokeApiResults } from '../models/PokeApiResults';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: PokeApiResults['results'], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }

}
