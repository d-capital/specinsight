import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      text: 'Стас хороший!',
      author: 'Елена Р.'
    },
    {
      text: 'Да, Стас хороший!',
      author: 'Дилан Г.'
    },
    {
      text: 'Работа должна быть загадочной и важной.',
      author: 'Марк С.'
    }];
}
