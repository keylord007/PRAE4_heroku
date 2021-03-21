import { Injectable } from '@angular/core';
import { LoginService } from "./login.service"
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultimediasService {
  public servidor = environment.url;
  public tipoMultimedias = [
    { _id: 1, f_descripcion: "Imagen" },
    { _id: 2, f_descripcion: "Video Normal (MP4)" },
    { _id: 3, f_descripcion: "Video Youtube" },
    { _id: 4, f_descripcion: "PDF" },
    { _id: 5, f_descripcion: "PDF Enlace" },
  ]
  constructor(public http: HttpClient, private loginService: LoginService) { }

  getMultimediasFiltro(params: any) {
    let options = this.loginService.setHeadersHttp();
    options["params"] = new HttpParams({ fromObject: params });
    return this.http.get(this.servidor + "/multimedias/", options)
  }

  crearMultimedia(datos: any) {
    let options = this.loginService.setHeadersHttp();
    return this.http.post(this.servidor + "/multimedias/crear-multimedia/", JSON.stringify(datos), options);
  }

  actualizarMultimedia(datos: any) {
    let options = this.loginService.setHeadersHttp();
    return this.http.post(this.servidor + "/multimedias/actualizar-multimedia/", JSON.stringify(datos), options);
  }

  getMultimediasByPagina(pagina: any) {
    let options = this.loginService.setHeadersHttp(false);
    return this.http.get(this.servidor + `/multimedias/multimedias-by-pagina/${pagina}`, options);
  }

  contarConsumoMultimedia(pagina: any, idElemento: any) {
    let options = this.loginService.setHeadersHttp(false);
    return this.http.get(this.servidor + `/multimedias/contar-consumo-multimedia/${pagina}/${idElemento}`, options);
  }
}
