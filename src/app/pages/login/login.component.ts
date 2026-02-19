import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) {}

  nameLabel:string = "О курсе";
  nameLabelRu:string = "О курсе";
  nameLabelEn:string = "About the course";

  roleLabel:string = "Бизнес-аналитик";
  roleLabelRu:string = "Бизнес-аналитик";
  roleLabelEn:string = "Business Analyst";

  description: string = "Привет! Я создал этот курс, чтобы помочь новичкам в профессии бизнес-аналитика освоить ключевые навыки и инструменты, необходимые для успешной карьеры. В курсе я делюсь своим опытом и знаниями, которые я накопил за годы работы в этой сфере. Я надеюсь, что этот курс станет полезным ресурсом для всех, кто хочет развиваться в области бизнес-анализа и достичь успеха в своей карьере.";
  descriptionRu: string = "Привет! Я создал этот курс, чтобы помочь новичкам в профессии бизнес-аналитика освоить ключевые навыки и инструменты, необходимые для успешной карьеры. В курсе я делюсь своим опытом и знаниями, которые я накопил за годы работы в этой сфере. Я надеюсь, что этот курс станет полезным ресурсом для всех, кто хочет развиваться в области бизнес-анализа и достичь успеха в своей карьере.";
  descriptionEn: string = "Hello! I created this course to help newcomers to the business analysis profession master the key skills and tools needed for a successful career. In this course, I share my experience and knowledge accumulated over years of working in this field. I hope this course will be a useful resource for anyone who wants to develop in the field of business analysis and achieve success in their career.";

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