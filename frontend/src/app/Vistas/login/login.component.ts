import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // 2. Define las variables para el formulario
  email = '';
  password = '';

  // 3. Inyecta el Router en el constructor
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // 4. Crea el método login
  login(): void {
    console.log('Intento de login con:', this.email, this.password);
    this.router.navigate(['/productos']);
  }
}