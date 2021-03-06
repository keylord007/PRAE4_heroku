import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-google-forms',
  templateUrl: './google-forms.component.html',
  styleUrls: ['./google-forms.component.scss']
})
export class GoogleFormsComponent implements OnInit {
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
