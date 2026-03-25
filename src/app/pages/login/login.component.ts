import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formulario: FormGroup = this._formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
  });

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) { }

  login(): void {
    this._authService.login(this.formulario.value.username, this.formulario.value.password);
  }
}
