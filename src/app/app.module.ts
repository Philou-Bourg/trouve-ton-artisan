import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArtisanFicheComponent } from './components/artisan-fiche/artisan-fiche.component';
import { Page404Component } from './components/page-404/page-404.component';
import { ArtisanListeComponent } from './components/artisans-liste/artisan-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ArtisanFicheComponent,
    Page404Component,
    ArtisanListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
