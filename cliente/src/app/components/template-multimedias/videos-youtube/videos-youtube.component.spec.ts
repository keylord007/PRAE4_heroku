import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosYoutubeComponent } from './videos-youtube.component';

describe('VideosYoutubeComponent', () => {
  let component: VideosYoutubeComponent;
  let fixture: ComponentFixture<VideosYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosYoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
