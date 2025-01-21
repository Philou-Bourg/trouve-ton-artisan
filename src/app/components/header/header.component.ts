// header.component.ts

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 // Je gére la recherche des artisans, implémenter la méthode
 search(query: string) {
  // Logique pour rechercher des artisans en fonction du nom, spécialité, ou ville
  console.log(query);
}
isMenuOpen: boolean = false;
 // Méthode pour ouvrir ou fermer le menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
// Méthode pour fermer le menu lorsque l'on clique sur un élément
closeMenu() {
  this.isMenuOpen = false;
}

// Méthode pour fermer le menu lorsqu'on clique en dehors du menu
@HostListener('document:click', ['$event'])
closeOnOutsideClick(event: MouseEvent) {
  const menuElement = document.querySelector('.nav-bar');
  const hamburgerElement = document.querySelector('.hamburger');
  // Vérifie si le clic se fait à l'extérieur du menu et du hamburger
  if (menuElement && hamburgerElement && !menuElement.contains(event.target as Node) && !hamburgerElement.contains(event.target as Node)) {
    this.isMenuOpen = false;
  }
}
}


