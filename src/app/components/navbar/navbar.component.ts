import { AuthService } from './../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuLink = [
    { routerLink: '/home', label: 'Home' },
    { routerLink: '/character', label: 'Personagens' },
    { routerLink: '/episode', label: 'Episódios' },
    { routerLink: '/location', label: 'Localizações' },
    { action: () => this.authService.logout(), label: 'Sair' },
  ];

  constructor(public authService: AuthService) { }
}
