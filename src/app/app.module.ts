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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ArtisanFicheComponent,
    Page404Component,
    ArtisanListeComponent,
    HeaderComponent
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
