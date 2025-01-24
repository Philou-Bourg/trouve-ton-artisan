import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArtisanFicheComponent } from './components/artisan-fiche/artisan-fiche.component';
import { ArtisanListeComponent } from './components/artisans-liste/artisan-liste.component';
import { Page404Component } from './components/page-404/page-404.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './components/donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './components/accessibilite/accessibilite.component';
import { GestionCookiesComponent } from './components/gestion-cookies/gestion-cookies.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'artisans/:categorie', component: ArtisanListeComponent },
  { path: 'artisan/:id', component: ArtisanFicheComponent },
  { path: 'artisans', component: ArtisanListeComponent },

  // Routes du footer
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'gestion-cookies', component: GestionCookiesComponent },

  // Route 404 - doit être en dernier
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }