// header.component.ts

import { Component, EventEmitter, Output, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() searchQuery: string = '';  // Réception de la valeur de recherche depuis le parent
  @Output() categorySelected = new EventEmitter<string>();  // Émission de l'événement pour la catégorie sélectionnée
  @Output() searchQueryChange = new EventEmitter<string>();  // Émission de l'événement pour la recherche

  // Propriétés pour la gestion de la recherche
  searchQueryValue: string = this.searchQuery; // Initialiser avec la valeur reçue du parent

  // Méthode pour gérer la recherche des artisans
  onSearch() {
    this.searchQueryChange.emit(this.searchQueryValue);  // Émettre la recherche avec la nouvelle valeur
  }

  isMenuOpen: boolean = false;

  // Méthode pour ouvrir ou fermer le menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Méthode pour fermer le menu lorsqu'on clique en dehors
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Méthode pour fermer le menu lorsqu'on clique en dehors du menu
  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const menuElement = document.querySelector('.nav-bar');
    const hamburgerElement = document.querySelector('.hamburger');
    if (menuElement && hamburgerElement && !menuElement.contains(event.target as Node) && !hamburgerElement.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }

  // Méthode pour sélectionner une catégorie et émettre l'événement
  onCategorySelect(category: string): void {
    this.categorySelected.emit(category);  // Émettre la catégorie sélectionnée
  }
}