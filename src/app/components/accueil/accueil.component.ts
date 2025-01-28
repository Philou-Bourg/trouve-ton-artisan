// accueil.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importer HttpClient

interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  artisans: Artisan[] = [];
  topArtisans: Artisan[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArtisans();
  }

  // Charger les artisans depuis le fichier JSON
  loadArtisans(): void {
    this.http.get<Artisan[]>('assets/datas.json')  // Utiliser HttpClient pour récupérer le fichier JSON
      .subscribe(data => {
        this.artisans = data;
        // Filtrer uniquement les artisans avec les IDs 8, 9 et 11
        this.topArtisans = this.artisans.filter(artisan => 
          ['8', '9', '11'].includes(artisan.id));
      });
  }

  // Calculer le nombre d'étoiles en fonction de la note
  getStars(note: number): number {
    return Math.round(note);  // Arrondir la note à l'entier supérieur ou inférieur
  }
}