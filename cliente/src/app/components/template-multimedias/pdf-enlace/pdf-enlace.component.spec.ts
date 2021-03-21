import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfEnlaceComponent } from './pdf-enlace.component';

describe('PdfEnlaceComponent', () => {
  let component: PdfEnlaceComponent;
  let fixture: ComponentFixture<PdfEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfEnlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
