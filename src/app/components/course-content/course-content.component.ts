import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-content',
  imports: [NgFor, RouterModule],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css'
})
export class CourseContentComponent {
  chapters = [
    { title: 'Базовые концепции', description: 'Стейкхолдеры, типы требований, артефакты.' },
    { title: 'Что такое хорошие требования?', description: 'Как понять, что требования можно отдать в разработку.' },
    { title: 'Что делать на новом проекте?', description: 'Анализ стейкхолдеров, глоссарий, базовая документация.' },
    { title: 'Выявление требований', description: 'Интервью, воркшопы, прототипы, анализ документации.' },
    { title: 'Приоретизация требований', description: 'MosCoW, Cost of delay, RICE...' },
    { title: 'Документация требований', description: 'Пользовательские истории, Use Case, UML, BPMN, ERD' },
    { title: 'Валидация требований', description: 'Демо, приемочные критерии, Ghrekin, ' },
    { title: 'SQL для BA', description: 'SELECT, JOIN, DISTINCT и многое другое' },
    { title: 'Документация API', description: 'Коллеции в POSTman, OpenApi и Swagger, REST,пара слов о микросервисах и очередях' },
    { title: 'Как работать в Agile команде', description: 'Планнинги, спринты, демо и когда же выявлять требования?' },
    { title: 'В плену у Ганта', description: 'Как написать SRS.' },
    { title: 'Управление изменениями', description: 'Клиент кричит - "Все пропало!"' },
    
  ];
}
