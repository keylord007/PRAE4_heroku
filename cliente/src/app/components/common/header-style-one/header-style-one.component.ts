import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-style-one',
  templateUrl: './header-style-one.component.html',
  styleUrls: ['./header-style-one.component.scss']
})
export class HeaderStyleOneComponent implements OnInit {

    constructor(public loginService: LoginService, private router: Router) { }

    ngOnInit(): void {
    }

    logOut() {
        localStorage.clear();
        this.router.navigate(["/login"]);
      }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }

}
