import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {

	redireccionar: any;
	constructor(private loginService: LoginService, private router: Router) { }

	canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.loginService.isLoggedIn()) {
			return true;

		} else {
			this.redireccionar = state.url;
			this.router.navigate(['/']);
			return false;
		}
	}
}