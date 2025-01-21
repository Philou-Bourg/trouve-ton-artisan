import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';

@Component({
  selector: 'app-artisans-liste',
  templateUrl: './artisan-liste.component.html',
  styleUrls: ['./artisan-liste.component.scss']
})
export class ArtisanListeComponent implements OnInit {
  artisans: any[] = [];
  filteredArtisans: any[] = [];
  category: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    // Récupérer la liste complète des artisans
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;

      // Écouter les paramètres de requête pour le filtrage
      this.route.queryParams.subscribe(params => {
        this.category = params['category'];

        if (this.category) {
          // Filtrer les artisans par catégorie
          this.filteredArtisans = this.artisans.filter(
            artisan => artisan.category === this.category
          );
        } else {
          // Si aucune catégorie, afficher tous les artisans
          this.filteredArtisans = this.artisans;
        }
      });
    });
  }
}