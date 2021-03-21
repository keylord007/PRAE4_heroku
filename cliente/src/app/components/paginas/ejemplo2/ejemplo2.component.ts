import { Component, OnInit } from '@angular/core';
import { MultimediasService } from '../../../services/multimedias.service';
import { TiposMultimedias } from '../../../Enums/TiposMultimedias';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.scss']
})
export class Ejemplo2Component implements OnInit {
  multimedias: any = []
  paginaSlug = "ejemplo2";
  TiposMultimedias = TiposMultimedias
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.multimediasService.getMultimediasByPagina(this.paginaSlug).subscribe((datos: any) => {
      this.multimedias = datos.multimedias
    })
  }

}
