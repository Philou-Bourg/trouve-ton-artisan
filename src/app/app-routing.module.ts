import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArtisanFicheComponent } from './components/artisan-fiche/artisan-fiche.component';
import { ArtisanListeComponent } from './components/artisans-liste/artisan-liste.component';
import { Page404Component } from './components/page-404/page-404.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'artisans', component: ArtisanListeComponent },
  { path: 'artisan/:id', component: ArtisanFicheComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
