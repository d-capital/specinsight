import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [NgFor],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricingPlans = [
    {
      name: 'Бесплатно',
      price: '0 ₽',
      features: [
        'Можешь прочесть курс прямо сейчас',
        'Курс бесплатный',
        'Лекции в формате статей с небольшими практическими заданиями'
      ]
    },
    {
      name: 'Платно',
      price: '2200 ₽ / занятие',
      features: [
        'Первое занятие (1 час) - анализ навыков - бесплатно',
        'Проверка заданий из курса',
        'Индивидуальная проработка план для повышения уровня'
      ]
    },
    {
      name: 'Корпоративный',
      price: 'По договоренности',
      features: [
        'Разработаем индивидуально решение для ваших бизнес аналитиков.'
      ]
    }
  ];
}
