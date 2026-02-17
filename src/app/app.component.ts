import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spec Insight';
   constructor(private router: Router) {
    console.log(navigator.language)
    var isUserLangSet = localStorage.getItem("isUserLangSet");
    if (isUserLangSet !== "yes") {
      if (navigator.language == "ru" || navigator.language == "ru-RU") {
        localStorage.setItem("language", "ru");
      }
      else {
        localStorage.setItem("language", "en");
      }
    }
  }
}
