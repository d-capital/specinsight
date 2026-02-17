import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  constructor(private router: Router) { }

  title:string = "Начни свой путь в Бизнес Анализе";
  titleRu:string = "Начни свой путь в Бизнес Анализе";
  titleEn:string = "Start Your Business Analysis Journey";

  subtitle:string = "Изучи курс";
  subtitleRu:string = "Изучи курс";
  subtitleEn:string = "Explore course contents";

  buttonLabel:string = "Начать курс";
  buttonLabelRu:string = "Начать курс";
  buttonLabelEn:string = "Start";

  ngOnInit(): void {
    var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.title = this.titleRu;
      this.subtitle = this.subtitleRu;
      this.buttonLabel = this.buttonLabelRu;
    }else{
      this.title = this.titleEn;
      this.subtitle = this.subtitleEn;
      this.buttonLabel = this.buttonLabelEn;
    }
  }

  toCourse() {
    this.router.navigate(['/articles'])
  }

}
