import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-mp4',
  templateUrl: './videos-mp4.component.html',
  styleUrls: ['./videos-mp4.component.scss']
})
export class VideosMp4Component implements OnInit {
  @Input() public src: any = ''  
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.src) {
      this.src = this.domSanitizer.bypassSecurityTrustResourceUrl(changes.src.currentValue);
    }
  }

  ngOnInit(): void {
  }

}
