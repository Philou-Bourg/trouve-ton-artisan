import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ArtisanFicheComponent } from './components/artisan-fiche/artisan-fiche.component';
import { Page404Component } from './components/page-404/page-404.component';
import { ArtisanListeComponent } from './components/artisans-liste/artisan-liste.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './components/donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './components/accessibilite/accessibilite.component';
import { GestionCookiesComponent } from './components/gestion-cookies/gestion-cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ArtisanFicheComponent,
    Page404Component,
    ArtisanListeComponent,
    HeaderComponent,
    FooterComponent,
    MentionsLegalesComponent,
    DonneesPersonnellesComponent,
    AccessibiliteComponent,
    GestionCookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
