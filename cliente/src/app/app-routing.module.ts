import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../app/components/main-structure/login-page/login-page.component'
import { HomePageComponent } from '../app/components/home-page/home-page.component'
import { ListaPaginasComponent } from '../app/components/administracion/paginas/lista-paginas/lista-paginas.component'
import { ListaMultimediasComponent } from '../app/components/administracion/multimedias/lista-multimedias/lista-multimedias.component'
import { LoginRouteGuard } from './router/guard/auth-guard';
import { NotLoginRouteGuard } from './router/guard/notAuth-guard';
import { Ejemplo3Component } from './components/paginas/ejemplo3/ejemplo3.component';
import { Ejemplo2Component } from './components/paginas/ejemplo2/ejemplo2.component';
import { Ejemplo1Component } from './components/paginas/ejemplo1/ejemplo1.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotLoginRouteGuard]
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'paginas',
    component: ListaPaginasComponent,
    canActivate: [LoginRouteGuard]
  },
  {
    path: 'ejemplo3',
    component: Ejemplo3Component,
    },
  {
    path: 'ejemplo2',
    component: Ejemplo2Component,
  },
  {
    path: 'ejemplo1',
    component: Ejemplo1Component,
     },
  {
    path: 'multimedias',
    component: ListaMultimediasComponent,
    canActivate: [LoginRouteGuard]
  },

  {
    path: '**',
    component: LoginPageComponent,
    canActivate: [NotLoginRouteGuard]
  },
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [NotLoginRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
