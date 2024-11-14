import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  async handleLogin() {
    try {
      const publicKey = await this.authService.getPublicKey().toPromise();

      const { encryptedUsername, encryptedPassword } = this.authService.encryptCredentials(publicKey!, this.username, this.password);

      this.authService.login(encryptedUsername, encryptedPassword).subscribe(
        response => {
          this.message = response;
        },
        error => {
          console.error("Помилка під час авторизації:", error);
          this.message = 'Авторизація не вдалася';
        }
      );
    } catch (error) {
      console.error("Помилка під час отримання публічного ключа:", error);
      this.message = 'Не вдалося отримати публічний ключ';
    }
  }
}