import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarPaginasComponent } from './crear-actualizar-paginas.component';

describe('CrearActualizarPaginasComponent', () => {
  let component: CrearActualizarPaginasComponent;
  let fixture: ComponentFixture<CrearActualizarPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActualizarPaginasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
