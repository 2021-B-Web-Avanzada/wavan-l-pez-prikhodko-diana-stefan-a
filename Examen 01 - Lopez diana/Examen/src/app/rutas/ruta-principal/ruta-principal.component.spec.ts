import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPrincipalComponent } from './ruta-principal.component';

describe('RutaPrincipalComponent', () => {
  let component: RutaPrincipalComponent;
  let fixture: ComponentFixture<RutaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
