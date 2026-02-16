import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as articlesList from '../articles/articles.json'

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  id = '1'; 
  title = "";
  content:SafeHtml = "";
  article:any;
  articles:any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    const artid = this.route.snapshot.paramMap.get('id');
    this.id = artid ? artid: '1';
        var language = localStorage.getItem('language');
    if (language == 'ru') {
      this.articles = articlesList['articles'];
    }
    else{
      this.articles = articlesList['articles_en'];
    }
    this.fetchArticle(this.id);
  }
  fetchArticle(id:string) {
    this.article = this.articles.find((a: any) => a.id === id);
    this.title = this.article["title"];
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.article["content"]);

  }

}
