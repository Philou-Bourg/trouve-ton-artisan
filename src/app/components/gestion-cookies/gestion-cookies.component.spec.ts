import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCookiesComponent } from './gestion-cookies.component';

describe('GestionCookiesComponent', () => {
  let component: GestionCookiesComponent;
  let fixture: ComponentFixture<GestionCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCookiesComponent]
    });
    fixture = TestBed.createComponent(GestionCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
