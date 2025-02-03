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
  currentCategory: string | null = null;
  isArtisansPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Vérifie si l'URL actuelle est /artisans ou /artisans/:categorie
        this.isArtisansPage = event.url.startsWith('/artisans');
      }
    });
  }

  updateCategory(category: string) {
    this.currentCategory = category;
  }
}