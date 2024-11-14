import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Маршрут для компонента LoginComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Перенаправлення на логін за замовчуванням
  { path: '**', redirectTo: '/login' } // Перенаправлення на логін для невідомих маршрутів
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }