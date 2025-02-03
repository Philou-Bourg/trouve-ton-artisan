//artisan.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; 

// Définition d'une interface pour un artisan
export interface Artisan {
  id: string;
  name: string;
  category: string;
  specialty: string;
  location: string;
  note: number;
}

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  private dataUrl = 'assets/datas.json';

  constructor(private http: HttpClient) {}

  // Récupérer tous les artisans
  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.dataUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des artisans :', error);
        return throwError(() => new Error('Impossible de récupérer les artisans.'));
      })
    );
  }

  // Récupérer les artisans par catégorie
  getArtisansByCategory(category: string): Observable<Artisan[]> {
    return this.getArtisans().pipe(
      map((artisans) =>
        artisans.filter((artisan) => artisan.category.toLowerCase() === category.toLowerCase())
      )
    );
  }

  // Récupérer un artisan par ID
  getArtisanById(id: string): Observable<Artisan | undefined> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.find((artisan) => artisan.id === id))
    );
  }
}