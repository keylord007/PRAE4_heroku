import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-youtube',
  templateUrl: './videos-youtube.component.html',
  styleUrls: ['./videos-youtube.component.scss']
})
export class VideosYoutubeComponent implements OnInit {
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
