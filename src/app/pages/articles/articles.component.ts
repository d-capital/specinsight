import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import * as articlesList from './articles.json'

@Component({
  selector: 'app-articles',
  imports: [FormsModule, NgFor, SlicePipe] ,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  articles: any[] = [{title:"title1",content:"<div>content1</div><b>hello</b>"},{title:"title2",content:"content2"}];
  newTitle = '';
  newContent = '';
  aiSuggestion = '';
  page = 1;
  pageSize = 5;
  totalPages = 1;
  pagedArticles:any[] = [];


  constructor(private http: HttpClient, private router: Router) {
    var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.articles = articlesList['articles'];
    }
    else{
      this.articles = articlesList['articles_en'];
    }
    this.totalPages = Math.ceil(this.articles.length / this.pageSize);
    this.fetchArticles();
  }
  fetchArticles() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedArticles = this.articles.slice(start, end);
    this.scrollToTop()
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.fetchArticles();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchArticles();
    }
  }

  public readArticle(event:any){
    let id:string = event.target.id; 
    this.router.navigate(["/article", id]);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
