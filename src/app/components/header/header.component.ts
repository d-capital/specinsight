import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  courseLabel:string = "Курс";
  courseLabelEn:string = "Course";
  courseLabelRu:string = "Курс";

  aboutLabel: string = "О курсу";
  aboutLabelRu: string = "О курсе";
  aboutLabelEn: string = "About";

  ngOnInit(): void {
    var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.courseLabel = this.courseLabelRu;
      this.aboutLabel = this.aboutLabelRu;
    }else{
      this.courseLabel = this.courseLabelEn;
      this.aboutLabel = this.aboutLabelEn;
    }
  }
}
