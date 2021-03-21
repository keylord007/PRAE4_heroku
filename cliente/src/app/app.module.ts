import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRouteGuard } from './router/guard/auth-guard';
import { NotLoginRouteGuard } from './router/guard/notAuth-guard';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { StickyNavModule } from 'ng2-sticky-nav';
import { LightboxModule } from 'ngx-lightbox';
import { OurMissionComponent } from './components/common/our-mission/our-mission.component';
import { HomeoneAboutComponent } from './components/pages/home-page-one/homeone-about/homeone-about.component';
import { HomeoneMainBannerComponent } from './components/pages/home-page-one/homeone-main-banner/homeone-main-banner.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';

import { LoginService } from './services/login.service';
import { PaginasService } from './services/paginas.service';
import { MultimediasService } from './services/multimedias.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderStyleOneComponent } from './components/main-structure/header-style-one/header-style-one.component';
import { FooterComponent } from './components/main-structure/footer/footer.component';
import { LoginPageComponent } from './components/main-structure/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CrearActualizarMultimediaComponent } from './components/administracion/multimedias/crear-actualizar-multimedia/crear-actualizar-multimedia.component';
import { ListaMultimediasComponent } from './components/administracion/multimedias/lista-multimedias/lista-multimedias.component';
import { CrearActualizarPaginasComponent } from './components/administracion/paginas/crear-actualizar-paginas/crear-actualizar-paginas.component';
import { ListaPaginasComponent } from './components/administracion/paginas/lista-paginas/lista-paginas.component';

import { ImagenesComponent } from './components/template-multimedias/imagenes/imagenes.component';
import { VideosMp4Component } from './components/template-multimedias/videos-mp4/videos-mp4.component';
import { VideosYoutubeComponent } from './components/template-multimedias/videos-youtube/videos-youtube.component';
import { PdfComponent } from './components/template-multimedias/pdf/pdf.component';
import { PdfEnlaceComponent } from './components/template-multimedias/pdf-enlace/pdf-enlace.component';
import { Ejemplo3Component } from './components/paginas/ejemplo3/ejemplo3.component';
import { Ejemplo2Component } from './components/paginas/ejemplo2/ejemplo2.component';
import { Ejemplo1Component } from './components/paginas/ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeoneAboutComponent,
    HomeoneMainBannerComponent,
    OurMissionComponent,
    AppComponent,
    HeaderStyleOneComponent,
    FooterComponent,
    FunfactsComponent,
    LoginPageComponent,
    HomePageComponent,
    CrearActualizarMultimediaComponent,
    ListaMultimediasComponent,
    CrearActualizarPaginasComponent,
    ListaPaginasComponent,
    HomeoneMainBannerComponent,
    HomeoneAboutComponent,
    ImagenesComponent,
    VideosMp4Component,
    VideosYoutubeComponent,
    PdfComponent,
    PdfEnlaceComponent,
    Ejemplo3Component,
    Ejemplo2Component,
    Ejemplo1Component,
  ],
  imports: [
    CountUpModule,
    TabsModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxScrollTopModule,
    StickyNavModule,
    LightboxModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    PaginasService,
    MultimediasService,
    LoginRouteGuard,
    NotLoginRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
