import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import localePtBr from '@angular/common/locales/pt';
import { EpisodeService } from './services/episode.service';
import { LocationService } from './services/location.service';
import { CharacterService } from './pages/character/services/character.service';
registerLocaleData(localePtBr)

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [DataService, CharacterService, EpisodeService, LocationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HttpClientModule, NavbarComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe(res => this.isAuthenticated = res);  }

}
