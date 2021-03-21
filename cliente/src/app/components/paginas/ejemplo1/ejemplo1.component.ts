import { Component, OnInit } from '@angular/core';
import { MultimediasService } from '../../../services/multimedias.service';
import { TiposMultimedias } from '../../../Enums/TiposMultimedias';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1Component implements OnInit {
  multimedias: any = []
  paginaSlug = "ejemplo1";
  TiposMultimedias = TiposMultimedias
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.multimediasService.getMultimediasByPagina(this.paginaSlug).subscribe((datos: any) => {
      this.multimedias = datos.multimedias
    })
  }

}
