import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMp4Component } from './videos-mp4.component';

describe('VideosMp4Component', () => {
  let component: VideosMp4Component;
  let fixture: ComponentFixture<VideosMp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosMp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosMp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
