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
    { title: 'Базовые концепции', description: 'Стейкхолдеры, типы требований, артефакты.', link:'article/1' },
    { title: 'Что такое хорошие требования?', description: 'Как понять, что требования можно отдать в разработку.', link:'article/2' },
    { title: 'Что делать на новом проекте?', description: 'Анализ стейкхолдеров, глоссарий, базовая документация.', link:'article/3' },
    { title: 'Выявление требований', description: 'Интервью, воркшопы, прототипы, анализ документации.', link:'article/4' },
    { title: 'Приоретизация требований', description: 'MosCoW, Cost of delay, RICE...', link:'article/5' },
    { title: 'Документация требований', description: 'Пользовательские истории, Use Case, UML, BPMN, ERD', link:'article/6' },
    { title: 'Валидация требований', description: 'Демо, приемочные критерии, Ghrekin, ', link:'article/7' },
    { title: 'SQL для BA', description: 'SELECT, JOIN, DISTINCT и многое другое', link:'article/8' },
    { title: 'Документация API', description: 'Коллеции в POSTman, OpenApi и Swagger, REST', link:'article/9' },
    { title: 'Как работать в Agile команде', description: 'Планнинги, спринты, демо и когда же выявлять требования?', link:'article/10' },
    { title: 'В плену у Ганта', description: 'Как написать SRS.', link:'article/11' },
    { title: 'Управление изменениями', description: 'Клиент кричит - "Все пропало!"', link:'article/12' },
    
  ];
}
