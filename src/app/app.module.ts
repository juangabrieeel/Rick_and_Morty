import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { LocationComponent } from './components/location/location.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './service/character.service';

export function provideLocalStore() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
  ],
  providers: [
    provideClientHydration(),
    {
      provide: 'LOCALSTORAGE',
      useFactory: provideLocalStore,
    },
    CharacterService,  // Consolidado en un solo array de providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }