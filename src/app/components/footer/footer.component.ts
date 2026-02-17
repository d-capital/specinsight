import { NgFor } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, NgFor,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  languages: string[] = ['ru', 'en'];
  lang: string = 'ru';

  homeLabel:string = "Главная";
  homeLabelEn:string = "Home";
  homeLabelRu:string = "Главная";

  courseLabel:string = "Курс";
  courseLabelEn:string = "Course";
  courseLabelRu:string = "Курс";

  aboutLabel: string = "Об авторе";
  aboutLabelRu: string = "Об авторе";
  aboutLabelEn: string = "About";

  ngOnInit(): void {
    this.lang = localStorage.getItem("language") ?? 'ru';
    var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.courseLabel = this.courseLabelRu;
      this.aboutLabel = this.aboutLabelRu;
      this.homeLabel = this.homeLabelRu;
    }else{
      this.courseLabel = this.courseLabelEn;
      this.aboutLabel = this.aboutLabelEn;
      this.homeLabel = this.homeLabelEn;
    }
  }

  onChange(value: string): void {
    this.lang = value;
    localStorage.setItem('language', value);
    localStorage.setItem('isUserLangSet', 'yes');
    window.location.reload();
  }
}
