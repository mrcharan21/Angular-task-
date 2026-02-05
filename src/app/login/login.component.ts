import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';                          // Two-way bound to input field
  password = '';
  error = '';

  constructor(private router: Router) {}              // Inject Router for navigation

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      
      // Show login success alert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome to Home Page',
        confirmButtonColor: '#28a745'
      }).then(() => {
        this.router.navigate(['/home']);
      });
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
