import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = 'no_idea';  // 🔑 Replace this!
  private tokenKey = 'access_token';

  constructor() {}

  initGoogleSignIn(callback: (token: string) => void) {
    (window as any).google.accounts.id.initialize({
      client_id: this.clientId,
      callback: (response: any) => {
        const idToken = response.credential;
        callback(idToken);
      }
    });

    (window as any).google.accounts.id.renderButton(
      document.getElementById('google-button'),
      { theme: 'outline', size: 'large' }
    );
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getUserInfo(): any {
    const token = this.getToken();
    return token ? jwtDecode(token) : null;
  }
}
