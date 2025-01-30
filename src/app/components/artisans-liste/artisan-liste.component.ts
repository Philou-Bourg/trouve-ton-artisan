// artisan-liste.components.ts

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';

@Component({
  selector: 'app-artisans-liste',
  templateUrl: './artisan-liste.component.html',
  styleUrls: ['./artisan-liste.component.scss']
})
export class ArtisanListeComponent implements OnInit, OnChanges {
  artisans: any[] = [];
  filteredArtisans: any[] = [];
  category: string | null = null;
  errorMessage: string | null = null;

  @Input() selectedCategory: string | null = null;  // Recevoir la catégorie sélectionnée

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    // Récupérer la liste complète des artisans et appliquer le filtre si une catégorie est sélectionnée
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;
      this.filterArtisans();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory']) {
      this.filterArtisans();
    }
  }

  filterArtisans(): void {
    if (this.selectedCategory) {
      this.filteredArtisans = this.artisans.filter(
        artisan => artisan.category === this.selectedCategory
      );

      this.errorMessage = this.filteredArtisans.length === 0 
        ? `Aucun artisan trouvé dans la catégorie "${this.selectedCategory}".`
        : null;
    } else {
      this.filteredArtisans = [];
      this.errorMessage = null;
    }
  }

  // Méthode pour créer le tableau d'étoiles basé sur la note
  createStarArray(note: number): any[] {
    return !isNaN(note) && note > 0 ? new Array(Math.round(note)) : [];
  }
}
