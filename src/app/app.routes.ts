import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/guards/auth.guard';
import { LoginGuard } from './services/guards/login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'character-list', loadChildren: () => import('./pages/character/pages/character-list/character-list.module').then(m => m.CharacterListModule), canActivate: [AuthGuard] },
  { path: 'character-details/:id', loadChildren: () => import('./pages/character/pages/character-details/character-details.module').then(m => m.CharacterDetailsModule), canActivate: [AuthGuard] },
  { path: 'episode-list', loadChildren: () => import('./pages/episode-list/episode-list.module').then(m => m.EpisodeListModule), canActivate: [AuthGuard] },
  { path: 'location-list', loadChildren: () => import('./pages/location-list/location-list.module').then(m => m.LocationListModule), canActivate: [AuthGuard] },
];
