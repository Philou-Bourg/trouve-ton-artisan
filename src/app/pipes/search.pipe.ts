// search.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../services/artisan.service';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {
  transform(artisans: Artisan[], searchText: string): Artisan[] {
    if (!artisans || !searchText) {
      return artisans;
    }

    searchText = searchText.toLowerCase();

    return artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(searchText) ||
      artisan.specialty.toLowerCase().includes(searchText) ||
      artisan.location.toLowerCase().includes(searchText)
    );
  }
}
