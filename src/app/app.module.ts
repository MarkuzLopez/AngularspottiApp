import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/// importaación de rutass modulo
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

/// http cliente module
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { LoadingComponent } from './shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
