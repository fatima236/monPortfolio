import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
   
    CommonModule 
  ],
  encapsulation: ViewEncapsulation.None // Désactive l'encapsulation
})
export class AppComponent {
  
title = 'mon-portfolio-fati'
  // Basculer le menu mobile
 
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    // Mettre à jour l'année en cours dans le copyright
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = this.currentYear.toString();
    }
  }
  // Basculer le menu mobile
 
    menuValue: boolean = false;
    menu_icon: string = 'bi bi-list';
  
    openMenu() {
      this.menuValue = !this.menuValue;
      this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    }
  
    closeMenu() {
      this.menuValue = false;
      this.menu_icon = 'bi bi-list';
    }
}