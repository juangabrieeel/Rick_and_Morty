import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a 'home' por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
