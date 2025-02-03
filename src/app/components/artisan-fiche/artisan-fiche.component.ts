// artisan-fiche.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';

@Component({
  selector: 'app-artisan-fiche',
  templateUrl: './artisan-fiche.component.html',
  styleUrls: ['./artisan-fiche.component.scss']
})
export class ArtisanFicheComponent implements OnInit {
  artisan: any;
  contact = { name: '', subject: '', message: '' };

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID depuis l'URL
    if (id) {
      this.artisanService.getArtisanById(id).subscribe(data => {
        this.artisan = data;
      });
    }
  }
  sendEmail() {
    console.log('Email envoyé avec:', this.contact);
    alert("L'email a été envoyé avec succès !");
  }

     // Création du tableau d'étoiles basé sur la note
    createStarArray(note: number): any[] {
      return !isNaN(note) && note > 0 ? new Array(Math.round(note)) : [];
    }
}