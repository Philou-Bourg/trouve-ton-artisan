//artisan.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  private dataUrl = 'assets/datas.json';

  constructor(private http: HttpClient) {}

  // Récupérer tous les artisans
  getArtisans(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  // Récupérer les artisans par catégorie
  getArtisansByCategory(category: string): Observable<any[]> {
    return this.getArtisans().pipe(
      map((artisans) =>
        artisans.filter((artisan) => artisan.category === category)
      )
    );
  }

  // Récupérer un artisan par ID
  getArtisanById(id: string): Observable<any> {
    return this.getArtisans().pipe(
      map((artisans) => artisans.find((artisan) => artisan.id === id))
    );
  }
}