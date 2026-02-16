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

  ngOnInit(): void {
    this.lang = localStorage.getItem("language") ?? 'ru';
  }

  onChange(value: string): void {
    this.lang = value;
    localStorage.setItem('language', value);
    localStorage.setItem('isUserLangSet', 'yes');
    window.location.reload();
  }
}
