import { Component, OnInit } from '@angular/core';
import { MultimediasService } from "../../../../services/multimedias.service";
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-lista-multimedias',
  templateUrl: './lista-multimedias.component.html',
  styleUrls: ['./lista-multimedias.component.scss']
})
export class ListaMultimediasComponent implements OnInit {

  multimedias: any = []
  multimedia: any = {}
  conmutadorModelAgregarMultimedia = true
  accionModelAgregarMultimedia = 1
  constructor(private multimediasService: MultimediasService) { }

  ngOnInit(): void {
    this.inicializacion()
  }

  inicializacion() {
    let params = {}
    this.multimediasService.getMultimediasFiltro(params).subscribe((data: any) => {
      if (data.success) {
        this.multimedias = [...data.multimedias]
      } else {

      }
    })
  }
  eventoClickEditarMultimedia(evento: any, row: any) {
    this.conmutadorModelAgregarMultimedia = !this.conmutadorModelAgregarMultimedia
    this.accionModelAgregarMultimedia = 0
    this.multimedia = row
    $('#modalAgregarMultimedia').click();
  }

  eventoClickDesactivarMultimedia(evento: any, row: any) {
    let params = { _id: row._id, f_activo: !row.f_activo }
    this.multimediasService.actualizarMultimedia(params).subscribe((datos: any) => {
      this.multimedias = this.multimedias.filter((multimedia: any) => {
        return multimedia._id != datos.multimedia._id
      })
      this.multimedias = [...this.multimedias, datos.multimedia]
      this.mensajeAlerta(`Se ${datos.multimedia.f_activo ? 'Activó' : 'Desactivó'} correctamente`)
    })
  }

  eventoClickNuevaMultimedia() {
    this.conmutadorModelAgregarMultimedia = !this.conmutadorModelAgregarMultimedia
    this.accionModelAgregarMultimedia = 1
    this.multimedia = {}
    $('#modalAgregarMultimedia').click();
  }
  agregarMultimediaNueva(datos: any) {
    $('#cerrarModelMultimedia').click();
    this.mensajeAlerta(`Se ${datos.accion ? 'Creó' : 'Actualizó'} correctamente`)
    if (!datos.accion) {
      this.multimedias = this.multimedias.filter((multimedia: any) => {
        return multimedia._id != datos.multimedia._id
      })
    }
    this.multimedias = [...this.multimedias, datos.multimedia]
  }
  modalCerrar(id: string) {
    $(id).click();
  }

  mensajeAlerta(mensaje: string, icon: any = "success", ) {
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
