import { Component, OnInit } from '@angular/core';
import { MultimediasService } from '../../../services/multimedias.service';
import { TiposMultimedias } from '../../../Enums/TiposMultimedias';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.scss']
})
export class Ejemplo3Component implements OnInit {
  multimedias: any = []
  paginaSlug = "ejemplo3";
  TiposMultimedias = TiposMultimedias
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.multimediasService.getMultimediasByPagina(this.paginaSlug).subscribe((datos: any) => {
      this.multimedias = datos.multimedias
    })
  }

}

