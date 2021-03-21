import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MultimediasService } from '../../../../services/multimedias.service'
import { PaginasService } from '../../../../services/paginas.service'
import Swal from 'sweetalert2'

declare var $: any;

@Component({
  selector: 'app-crear-actualizar-multimedia',
  templateUrl: './crear-actualizar-multimedia.component.html',
  styleUrls: ['./crear-actualizar-multimedia.component.scss']
})
export class CrearActualizarMultimediaComponent implements OnInit {
  multimediaForm = new FormGroup({
    f_descripcion: new FormControl('', [Validators.required]),
    f_pagina: new FormControl(),
    f_url: new FormControl('', [Validators.required]),
    f_tipo_multimedia: new FormControl('', [Validators.required]),
    f_nota: new FormControl(),
  })
  paginas: any = []
  pagina: any = {}
  tiposMultimedias: any
  @Input() public accion = 1; // 1 => Crear, 0 => Actualizar
  @Input() public multimedia: any = {};
  @Input() public conmutador = true;
  @Output() evento_aceptar = new EventEmitter();
  @Output() eventos_cancelar = new EventEmitter();

  constructor(private multimediasService: MultimediasService, private paginasService: PaginasService) { }

  ngOnInit(): void {
    this.tiposMultimedias = [...this.multimediasService.tipoMultimedias]
    let params = { f_activo: true }
    this.paginasService.getPaginasFiltro(params).subscribe((data: any) => {
      if (data.success) {
        this.paginas = [...data.paginas]
      }
    })
  }
  ngAfterViewInit() {
    $("#selectPaginas").select2({})
    $("#selectPaginas").on('select2:select', (e: any) => {
      this.pagina = e.params.data;
    })
    $("#selectPaginas").on('select2:clear', (e: any) => {
      this.pagina = {};
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.conmutador && this.accion !== undefined) {
      if (this.accion) {
        this.multimediaForm.reset();
        this.borrar()
      } else {
        $("#selectPaginas").val(this.multimedia.f_pagina._id);
        $("#selectPaginas").trigger('change');
        this.multimedia.f_pagina['id'] = this.multimedia.f_pagina['_id']
        this.pagina = this.multimedia.f_pagina
        this.multimediaForm.patchValue(this.multimedia)
      }
    }
  }
  onFormSubmit(form: any) {
    const callback = (datos: any) => {
      this.evento_aceptar.emit({
        accion: this.accion,
        formulario: form.value,
        multimedia: datos.multimedia
      })
    }
    form.value["f_pagina"] = this.pagina.id
    if (form.valid && form.value["f_pagina"]) {
      if (this.accion) {
        form.value["f_activo"] = true;
        form.value["f_fecha"] = new Date();
        this.multimediasService.crearMultimedia(form.value).subscribe((datos: any) => {
          callback(datos)
        })
      } else {
        form.value["_id"] = this.multimedia._id
        this.multimediasService.actualizarMultimedia(form.value).subscribe((datos: any) => {
          callback(datos)
        })
      }
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: "Faltan Parametros",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  cancelar() { }
  borrar() {
    $("#selectPaginas").val('');
    $("#selectPaginas").trigger('change');
  }

}
