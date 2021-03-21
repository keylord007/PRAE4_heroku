import { Injectable } from '@angular/core';
import { LoginService } from "./login.service"
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {
  public servidor = environment.url;
  constructor(public http: HttpClient, private loginService: LoginService) { }

  getPaginasFiltro(params: any) {
    let options = this.loginService.setHeadersHttp();
    options["params"] = new HttpParams({ fromObject: params });
    return this.http.get(this.servidor + "/paginas/", options)
  }

  crearPagina(datos: any) {
    let options = this.loginService.setHeadersHttp();
    return this.http.post(this.servidor + "/paginas/crear-pagina/", JSON.stringify(datos), options);
  }

  actualizarPagina(datos: any) {
    let options = this.loginService.setHeadersHttp();
    return this.http.post(this.servidor + "/paginas/actualizar-pagina/", JSON.stringify(datos), options);
  }


}
