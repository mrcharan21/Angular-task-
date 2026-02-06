import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },                         
  { path: 'login', component: LoginComponent },                // Public route
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },               // Protected route
  { path: '**', redirectTo: 'login' }                 // Wildcard route 
];
