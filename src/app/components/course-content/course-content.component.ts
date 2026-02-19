import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-content',
  imports: [NgFor, RouterModule],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css'
})
export class CourseContentComponent implements OnInit {
  toCourseLabel:string = 'К курсу';
  toCourseLabelRu:string = 'К курсу';
  toCourseLabelEn:string = 'To the course';

  courseContentLabel:string = 'Содержание Курса';
  courseContentLabelRu:string = 'Содержание Курса';
  courseContentLabelEn:string = 'Course Content';

  chapters = [
    { title: 'Базовые концепции', description: 'Стейкхолдеры, типы требований, артефакты.', link:'article/1' },
    { title: 'Что такое хорошие требования?', description: 'Как понять, что требования можно отдать в разработку.', link:'article/2' },
    { title: 'Что делать на новом проекте?', description: 'Анализ стейкхолдеров, глоссарий, базовая документация.', link:'article/3' },
    { title: 'Выявление требований', description: 'Интервью, воркшопы, прототипы, анализ документации.', link:'article/4' },
    { title: 'Приоретизация требований', description: 'MosCoW, Cost of delay, RICE...', link:'article/5' },
    { title: 'Документация требований', description: 'Пользовательские истории, Use Case, UML, BPMN, ERD', link:'article/6' },
    { title: 'Валидация требований', description: 'Демо, приемочные критерии, Ghrekin, ', link:'article/7' },
    { title: 'SQL для BA', description: 'SELECT, JOIN, DISTINCT ...', link:'article/8' },
    { title: 'Документация API', description: 'Коллеции в POSTman, OpenApi и Swagger, REST', link:'article/9' },
    { title: 'Как работать в Agile команде', description: 'Планнинги, спринты, демо ...', link:'article/10' },
    { title: 'В плену у Ганта', description: 'Как написать SRS.', link:'article/11' },
    { title: 'Управление изменениями', description: 'Клиент кричит - "Все пропало!"', link:'article/12' },
    { title: 'Очереди сообщений', description: 'Как работать с очередями в распределённых системах.', link:'article/13' },
    { title: 'NoSQL и Объектное хранилище', description: 'Как работать с NoSQL и объектными хранилищами.', link:'article/14' },
    
  ];
  chaptersRu = [
    { title: 'Базовые концепции', description: 'Стейкхолдеры, типы требований, артефакты.', link:'article/1' },
    { title: 'Что такое хорошие требования?', description: 'Как понять, что требования можно отдать в разработку.', link:'article/2' },
    { title: 'Что делать на новом проекте?', description: 'Анализ стейкхолдеров, глоссарий, базовая документация.', link:'article/3' },
    { title: 'Выявление требований', description: 'Интервью, воркшопы, прототипы, анализ документации.', link:'article/4' },
    { title: 'Приоретизация требований', description: 'MosCoW, Cost of delay, RICE...', link:'article/5' },
    { title: 'Документация требований', description: 'Пользовательские истории, Use Case, UML, BPMN, ERD', link:'article/6' },
    { title: 'Валидация требований', description: 'Демо, приемочные критерии, Ghrekin, ', link:'article/7' },
    { title: 'SQL для BA', description: 'SELECT, JOIN, DISTINCT ...', link:'article/8' },
    { title: 'Документация API', description: 'Коллеции в POSTman, OpenApi и Swagger, REST', link:'article/9' },
    { title: 'Как работать в Agile команде', description: 'Планнинги, спринты, демо ...', link:'article/10' },
    { title: 'В плену у Ганта', description: 'Как написать SRS.', link:'article/11' },
    { title: 'Управление изменениями', description: 'Клиент кричит - "Все пропало!"', link:'article/12' },
    { title: 'Очереди сообщений', description: 'Как работать с очередями в распределённых системах.', link:'article/13' },
    { title: 'NoSQL и Объектное хранилище', description: 'Как работать с NoSQL и объектными хранилищами.', link:'article/14' },
    
  ];
    chaptersEn = [
    { title: 'Basic concepts', description: 'Stakeholders, requirement types, artefacts.', link:'article/1' },
    { title: 'What are good requirements?', description: 'How to understand that requirement are ready for development.', link:'article/2' },
    { title: 'What to do on a new project?', description: 'Stakeholder analysis, glossary, baseline documentation.', link:'article/3' },
    { title: 'Requirements Elicitation', description: 'Interviews, workshops, prototypes, documentation analysis.', link:'article/4' },
    { title: 'Prioritizing Requirements', description: 'MosCoW, Cost of delay, RICE...', link:'article/5' },
    { title: 'Requirements Documentation', description: 'User story, Use Case, UML, BPMN, ERD', link:'article/6' },
    { title: 'Requirements Validation', description: 'Demo, Acceptance Criteria, Ghrekin, ', link:'article/7' },
    { title: 'SQL for BA', description: 'SELECT, JOIN, DISTINCT ...', link:'article/8' },
    { title: 'API Documentation', description: 'POSTman collection, OpenApi and Swagger, REST', link:'article/9' },
    { title: 'How to Work in an Agile Team', description: 'Planning, sprints, demo ...', link:'article/10' },
    { title: 'Captured by Gant', description: 'System Requirements Specification.', link:'article/11' },
    { title: 'Change Management', description: 'How to deal with change requests.', link:'article/12' },
    { title: 'Message Queues', description: 'How to work with message queues in distributed systems.', link:'article/13' },
    { title: 'NoSQL and Object Storage', description: 'How to work with NoSQL and object storage systems.', link:'article/14' },
    
  ];

  ngOnInit(): void {
    var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.chapters = this.chaptersRu;
      this.toCourseLabel = this.toCourseLabelRu;
      this.courseContentLabel = this.courseContentLabelRu;
    }else{
      this.chapters = this.chaptersEn;
      this.toCourseLabel = this.toCourseLabelEn;
      this.courseContentLabel = this.courseContentLabelEn;
    }
  }
}
