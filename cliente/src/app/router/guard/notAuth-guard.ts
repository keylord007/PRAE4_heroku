import { CanActivate, Router,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Injectable()
export class NotLoginRouteGuard implements CanActivate {

  constructor(private loginService: LoginService, private router:Router) {}

  canActivate() {

  	if(!this.loginService.isLoggedIn()){
	    return true;
  	}else{
  		this.router.navigate(['/home']);
  		return false;
  	}
  }
}