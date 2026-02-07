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

  ngOnInit(): void {
    this.authService.initGoogleSignIn(this.handleGoogleLogin.bind(this));
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