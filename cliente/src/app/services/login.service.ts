import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  helper = new JwtHelperService();
  token: any;
  options: any;
  user: any;
  servidor = environment.url;

  constructor(public http: HttpClient) { }

  setLocalStorage(params: any) {
    let paramsKey: Array<any> = Object.keys(params);
    paramsKey.forEach((param) => {
      let parametroAtring = typeof params[param] == 'string' ? params[param] : JSON.stringify(params[param]);
      localStorage.setItem(param, parametroAtring);
    })
  }

  getLocalStorage() {
    this.token = localStorage.getItem("token");
    this.user = localStorage.getItem("user");
    return {
      token: this.token,
      user: this.user,
    }
  }

  setHeadersHttp(conToken: boolean = true) {
    this.getLocalStorage();
    let headers: any = {
      "Content-Type": "application/json"
    }
    if (conToken) {
      headers['authorization'] = this.token
    }
    this.options = {
      headers: new HttpHeaders(headers)
    }
    return this.options
  }

  //isLoggedIn 
  isLoggedIn() {
    let token = localStorage.getItem('token');
    return token != null && !this.helper.isTokenExpired(token);
  }

  login(user: any) {
    this.setHeadersHttp(false);
    return this.http.post(this.servidor + "/authentication/login", JSON.stringify(user), this.options);
  }

}
