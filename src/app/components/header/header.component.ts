// header.component.ts

import { Component, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() categorySelected = new EventEmitter<string>(); // Déclaration de l'output

  // Je gére la recherche des artisans, implémentation de la méthode
  search(query: string) {
    // Logique pour rechercher des artisans en fonction du nom, spécialité, ou ville
   
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
    this.categorySelected.emit(category);  // Émettre l'événement avec la catégorie sélectionnée
  }
}