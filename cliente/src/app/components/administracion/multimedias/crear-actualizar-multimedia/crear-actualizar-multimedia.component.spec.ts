import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarMultimediaComponent } from './crear-actualizar-multimedia.component';

describe('CrearActualizarMultimediaComponent', () => {
  let component: CrearActualizarMultimediaComponent;
  let fixture: ComponentFixture<CrearActualizarMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearActualizarMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
