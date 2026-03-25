import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/guards/auth.guard';
import { LoginGuard } from './services/guards/login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'character', loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule), canActivate: [AuthGuard] },
  { path: 'episode', loadChildren: () => import('./pages/episode/episode.module').then(m => m.EpisodeModule), canActivate: [AuthGuard] },
  { path: 'location-list', loadChildren: () => import('./pages/location-list/location-list.module').then(m => m.LocationListModule), canActivate: [AuthGuard] },
];
