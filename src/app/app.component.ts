import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileImage = 'foto2.jpg'; // Chemin de l'image de profil
  skills = [
    { name: 'Java (Spring Boot)', icon: 'fab fa-java' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'HTML5 & CSS3', icon: 'fab fa-html5' },
    { name: 'JavaScript', icon: 'fab fa-js-square' }
  ];
  isMenuOpen = false; // État du menu mobile

  // Basculer le menu mobile
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fermer le menu après un clic sur un lien
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Basculer entre le mode clair et sombre


  // Basculer entre les langues (exemple simple)
  toggleLanguage() {
    alert('Changer la langue ici !'); // Remplacez par votre logique de changement de langue
  }
}
