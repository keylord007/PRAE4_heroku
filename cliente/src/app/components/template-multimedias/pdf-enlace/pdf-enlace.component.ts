import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-enlace',
  templateUrl: './pdf-enlace.component.html',
  styleUrls: ['./pdf-enlace.component.scss']
})
export class PdfEnlaceComponent implements OnInit {

  @Input() public href: any = ''
  @Input() public titulo: any = ''
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.href) {
      this.href = this.domSanitizer.bypassSecurityTrustResourceUrl(changes.href.currentValue);
    }
  }

  ngOnInit(): void {
  }

}
