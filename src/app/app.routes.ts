import { Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { LoginComponent } from './pages/login/login.component';
import { ArticleComponent } from './pages/article/article.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'articles', component: ArticlesComponent },
    { path:'login', component: LoginComponent },
    { path:'article/:id', component: ArticleComponent}
];
