import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanFicheComponent } from './artisan-fiche.component';

describe('ArtisanFicheComponent', () => {
  let component: ArtisanFicheComponent;
  let fixture: ComponentFixture<ArtisanFicheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtisanFicheComponent]
    });
    fixture = TestBed.createComponent(ArtisanFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
