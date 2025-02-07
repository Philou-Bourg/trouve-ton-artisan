// artisan-liste.components.ts

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ArtisanService } from '../../services/artisan.service';

@Component({
  selector: 'app-artisans-liste',
  templateUrl: './artisan-liste.component.html',
  styleUrls: ['./artisan-liste.component.scss']
})
export class ArtisanListeComponent implements OnInit, OnChanges {
  artisans: any[] = [];              // Liste complète des artisans
  filteredArtisans: any[] = [];      // Liste filtrée des artisans, affichée seulement si elle contient des éléments
  @Input() selectedCategory: string | null = null;  // Catégorie sélectionnée
  @Input() searchQuery: string = '';  // Valeur de la recherche

    constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    // Récupérer la liste complète des artisans dès le début
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;
      this.filterArtisans();  // Appliquer les filtres immédiatement après le chargement des données
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Appliquer le filtre si la catégorie ou la recherche change
    if (changes['selectedCategory'] || changes['searchQuery']) {
      this.filterArtisans();
    }
  }

  // Filtrage des artisans selon les critères sélectionnés (catégorie et recherche)
  filterArtisans(): void {
    let filtered = this.artisans;

    // Filtrage par catégorie (si une catégorie est sélectionnée)
    if (this.selectedCategory) {
      filtered = filtered.filter(artisan => artisan.category === this.selectedCategory);
    }

    // Filtrage par recherche (sur nom, spécialité ou localisation)
    if (this.searchQuery) {
      filtered = filtered.filter(artisan =>
        artisan.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        artisan.location.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }


    // Mise à jour de la liste filtrée
    this.filteredArtisans = filtered;
  }

  // Méthode pour créer un tableau d'étoiles basé sur la note
  createStarArray(note: number): any[] {
    return !isNaN(note) && note > 0 ? new Array(Math.round(note)) : [];
  }
}