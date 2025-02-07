// page-404.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-404',
  templateUrl: './page-404.component.html',
  styleUrls: ['./page-404.component.scss']
})
export class Page404Component {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
