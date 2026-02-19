import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[NgFor],
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) {}

  nameLabel:string = "Станислав Дзюба";
  nameLabelRu:string = "Станислав Дзюба";
  nameLabelEn:string = "Stanislav Dziuba";

  roleLabel:string = "Бизнес-аналитик";
  roleLabelRu:string = "Бизнес-аналитик";
  roleLabelEn:string = "Business Analyst";

  description: string = "Привет! Я автор этого курса, бизнес-аналитик с более чем пятью годами опытом создания различных типов приложений - микросервисов, пользовательских сайтов, и более чем десятью годами совокупного опыта в международном бизнесе. Я специализируюсь на логистике и e-comm, работал с маркетплейсом страховок и подкаст платформой. Для меня важно создавать культуру работы с требованиями в компаниях. У меня есть опыт управления проектами в автопроме, работал как в парадигме waterfall    так и в гибких методолгиях управления проектами и везде находил пути оптимизировать работу.    Я решил создать этот курс как основу для развития навыков новчиков в профессии.";
  descriptionRu: string = "Привет! Я автор этого курса, бизнес-аналитик с более чем пятью годами опытом создания различных типов приложений - микросервисов, пользовательских сайтов, и более чем десятью годами совокупного опыта в международном бизнесе. Я специализируюсь на логистике и e-comm, работал с маркетплейсом страховок и подкаст платформой. Для меня важно создавать культуру работы с требованиями в компаниях. У меня есть опыт управления проектами в автопроме, работал как в парадигме waterfall    так и в гибких методолгиях управления проектами и везде находил пути оптимизировать работу.    Я решил создать этот курс как основу для развития навыков новчиков в профессии.";
  descriptionEn: string = "Hello! I'm the author of this course, a business analyst with over five years of experience building various types of applications - microservices, custom websites -   and over ten years of combined experience in international business. I specialize in logistics and e-commerce, having worked with an insurance marketplace and a podcast platform. It's important to me to create a requirements management culture in companies. I have experience managing projects in the automotive industry, working with both the waterfall paradigm and agile project management methodologies, and always finding ways to optimize work. I decided to create this course as a foundation for developing the skills of newcomers.";

  skills:string = "Навыки";
  skillsRu:string = "Навыки";
  skillsEn:string = "Skills";

  contacts:string = "Контакты";
  contactsRu:string = "Контакты";
  contactsEn:string = "Contacts";

  skillList = ['Выявление и документация требований','Управление изменениями','Приоретизация',
    'Прототипирование(Figma)','Управление проектами','BPMN, UML, C4','Git & GitHub',
    'Python - Flask, FastAPI','Angular']
  skillListRu = ['Выявление и документация требований','Управление изменениями','Приоретизация',
  'Прототипирование(Figma)','Управление проектами','BPMN, UML, C4','Git & GitHub',
  'Python - Flask, FastAPI','Angular']
  skillListEn = ['Requirements elicitation and documentation','Change management','Priorization',
  'Prototyping (Figma)','Project management','BPMN, UML, C4','Git & GitHub',
  'Python - Flask, FastAPI','Angular']

  ngOnInit(): void {
    this.authService.initGoogleSignIn(this.handleGoogleLogin.bind(this));
    var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.nameLabel = this.nameLabelRu;
      this.roleLabel = this.roleLabelRu;
      this.description = this.descriptionRu;
      this.skills = this.skillsRu;
      this.contacts = this.contactsRu;
      this.skillList = this.skillListRu;
    }else{
      this.nameLabel = this.nameLabelEn;
      this.roleLabel = this.roleLabelEn;
      this.description = this.descriptionEn;
      this.skills = this.skillsEn;
      this.contacts = this.contactsEn;
      this.skillList = this.skillListEn;
    }
  }

  handleGoogleLogin(idToken: string) {
    this.http.post<any>('http://localhost:8000/auth/google', { token: idToken })
      .subscribe({
        next: (res) => {
          this.authService.storeToken(res.access_token);
          console.log('Logged in:', this.authService.getUserInfo());
        },
        error: (err) => console.error('Login failed', err)
      });
  }
}