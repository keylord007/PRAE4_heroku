import { Component, OnInit } from '@angular/core';
import { PaginasService } from "../../../../services/paginas.service";
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-lista-paginas',
  templateUrl: './lista-paginas.component.html',
  styleUrls: ['./lista-paginas.component.scss']
})
export class ListaPaginasComponent implements OnInit {

  paginas: any = []
  pagina: any = {}
  conmutadorModelAgregarPagina = true
  accionModelAgregarPagina = 1
  constructor(private paginasService: PaginasService) { }

  ngOnInit(): void {
    this.inicializacion()
  }

  inicializacion() {
    let params = { }
    this.paginasService.getPaginasFiltro(params).subscribe((data: any) => {
      if (data.success) {
        this.paginas = [...data.paginas]
      }
    })
  }
  eventoClickEditarPagina(evento: any, row: any) {
    this.conmutadorModelAgregarPagina = !this.conmutadorModelAgregarPagina
    this.accionModelAgregarPagina = 0
    this.pagina = row
      $('#modalAgregarPagina').click();
  }

  eventoClickDesactivarPagina(evento: any, row: any) {
    let params = { _id: row._id, f_activo: !row.f_activo}
    this.paginasService.actualizarPagina(params).subscribe((datos: any) => {
      this.paginas = this.paginas.filter((pagina: any) => {
        return pagina._id != datos.pagina._id
      })
      this.paginas = [...this.paginas, datos.pagina]
      this.mensajeAlerta(`Se ${datos.pagina.f_activo ? 'Activó' : 'Desactivó'} correctamente`)
    })
  }

  eventoClickNuevaPagina() {
    this.conmutadorModelAgregarPagina = !this.conmutadorModelAgregarPagina
    this.accionModelAgregarPagina = 1
    this.pagina = {}
    $('#modalAgregarPagina').click();
  }
  agregarPaginaNueva(datos: any) {
    $('#cerrarModelPagina').click();
    this.mensajeAlerta(`Se ${datos.accion ? 'Creó' : 'Actualizó'} correctamente`)
    if (!datos.accion) {
      this.paginas = this.paginas.filter((pagina: any) => {
        return pagina._id != datos.pagina._id
      })
    }
    this.paginas = [...this.paginas, datos.pagina]
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
