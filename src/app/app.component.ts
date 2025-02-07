//app.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'artisans-app';
  currentCategory: string | null = null; // Catégorie actuelle
  searchQuery: string = ''; // Valeur de la recherche
  isArtisansPage: boolean = false; // Vérifie si on est sur la page des artisans

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifier la route actuelle à chaque changement de navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects; // Capture l'URL finale après redirection

        // Vérifie si l'on est sur la page /artisans ou /artisans/:categorie
        const isOnArtisansPage = url.startsWith('/artisans') || url.match(/^\/artisans\/[^\/]+$/) !== null;
        if (isOnArtisansPage) {
          this.isArtisansPage = true;
        } else {
          this.isArtisansPage = false;
          // Réinitialisation uniquement si on quitte la section artisans
          this.currentCategory = null;
          this.searchQuery = '';
        }
      }
    });
  }

  // Met à jour la catégorie sélectionnée et réinitialise la barre de recherche
  updateCategory(category: string) {
    this.currentCategory = category;
    this.searchQuery = ''; // Réinitialise la barre de recherche
  }

  // Met à jour la valeur de la recherche
  updateSearchQuery(query: string) {
    this.searchQuery = query;
  }
}