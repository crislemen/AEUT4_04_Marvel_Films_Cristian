import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPeliculaComponent } from './detalles-pelicula.component';

describe('DetallesPeliculaComponent', () => {
  let component: DetallesPeliculaComponent;
  let fixture: ComponentFixture<DetallesPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
