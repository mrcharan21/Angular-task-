import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userForm: FormGroup;            // Reactive Form instance
  users: any[] = [];
  ages: number[] = [];

  // Initialize form and load data from localStorage
  constructor(private fb: FormBuilder, private router: Router, private cdr: ChangeDetectorRef) {

    // Create age list (1 to 100)
    for (let i = 1; i <= 100; i++) {
      this.ages.push(i);
    }

    // Reactive Form with validation
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(2)]]
    });

    // Load data from localStorage
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  // Easy access for validation in HTML
  get f() {
    return this.userForm.controls;
  }

  // Add user to list and localStorage
  addUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.users.push(this.userForm.value);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.userForm.reset();

    // Show success alert
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Data added successfully',
      confirmButtonColor: '#28a745'
    });
  }

  // Delete user with confirmation
  deleteUser(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.cdr.detectChanges(); // Force change detection

        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Thank you successfully deleted data',
          confirmButtonColor: '#28a745'
        });
      }
    });
  }

  // Logout function
  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        
        // Show logout success message
        Swal.fire({
          icon: 'success',
          title: 'Logged Out!',
          text: 'You have been successfully logged out',
          confirmButtonColor: '#28a745'
        }).then(() => {
          this.router.navigate(['/login']);
        });
      }
    });
  }
}
