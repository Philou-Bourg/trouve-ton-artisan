//app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artisans-app';
  currentCategory: string | null = null;

  updateCategory(category: string) {
    this.currentCategory = category;
  }
}