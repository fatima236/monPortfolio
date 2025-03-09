import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';
title = 'mon-portfolio-fati'
  // Basculer le menu mobile
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  // Fermer le menu après un clic sur un lien
  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }
}