import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {
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
