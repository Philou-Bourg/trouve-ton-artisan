import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArtisanFicheComponent } from './components/artisan-fiche/artisan-fiche.component';
import { ArtisanListeComponent } from './components/artisans-liste/artisan-liste.component';
import { Page404Component } from './components/page-404/page-404.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },

  // Route pour afficher la liste des artisans filtrée par catégorie
  { path: 'artisans/:categorie', component: ArtisanListeComponent },

  // Route pour afficher la fiche détaillée d'un artisan
  { path: 'artisan/:id', component: ArtisanFicheComponent },

  // Route pour afficher la liste des artisans
  { path: 'artisans', component: ArtisanListeComponent },
  
  // Route 404
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
