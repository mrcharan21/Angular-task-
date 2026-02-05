
# Angular Fresher Mini Project    To run the project follow the steps below,go to line 70 and above.

##  Project Description
This project is developed as part of an **Angular Fresher Assignment** to demonstrate basic Angular concepts such as components, routing, forms, validation, and UI handling.

The application contains a **Login page** and a **Home page** with  route protection.

---

##  Objective
To evaluate Angular fundamentals including:
- Components
- Routing
- Forms (Template-driven & Reactive)
- Event binding
- Conditional rendering
- Basic UI handling

---

## Technology Stack
- Angular (Version 12 or above) used current version 12.2.16
- TypeScript
- HTML, CSS
- Bootstrap (for responsive UI)
- Swal fire (sweet alert) for notifications

---

##  Application Features

###  Login Page
- Username and Password input fields
- Login button
- Authentication logic
- Error message for invalid credentials
- Two-way binding using `ngModel`
- Event binding using `(click)`

**Login Credentials**

                            username : admin
                            password : admin123


---

###  Home Page
- Reactive Form with validation
- Input fields:
  - Name (Required)
  - Email (Required & valid email)
  - Age (Dropdown, must be greater than 1)
- Add data to table
- Delete row from table
- “No data available” message when table is empty
- Logout functionality

---

###  Security & Data Storage
- Route Guard to protect Home page
- Login state stored in `localStorage`
- Table data stored in `localStorage`
- Data persists after page refresh
- Logout clears stored data

---


---

##  How to Run the Project

### Step 1: Install Node.js
Download and install Node.js (LTS):
https://nodejs.org

---

### Step 2: Install Angular CLI
```bash
npm install -g @angular/cli



```
### Step 3: Clone the Repository
```bash
git clone https://github.com/mrcharan21/Angular-task-.git   
cd angular-mini-project
```

### Step 4: Install Dependencies
```bash
npm install
```

### Step 5: Run the Application
```bash

    ng serve

```
Open your browser and navigate to `http://localhost:4200` to see the application in action.

---
##  Conclusion
This Angular mini project demonstrates the essential features of an Angular application, including component-based architecture, routing, form handling, and state management. It serves as a foundational project for Angular beginners to understand and implement basic concepts effectively.


Name : Charan kumar 
Email : charanguguloth13@gmail.com

