import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JSEncrypt } from 'jsencrypt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  getPublicKey(): Observable<string> {
    return this.http.get(`${this.apiUrl}/publicKey`, { responseType: 'text' });
  }

  // Шифрування даних
  encryptCredentials(publicKey: string, username: string, password: string): { encryptedUsername: string, encryptedPassword: string } {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey);

    const encryptedUsername = encryptor.encrypt(username) || '';
    const encryptedPassword = encryptor.encrypt(password) || '';

    return { encryptedUsername, encryptedPassword };
  }

  login(encryptedUsername: string, encryptedPassword: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login`, {
      username: encryptedUsername,
      password: encryptedPassword
    });
  }
}
