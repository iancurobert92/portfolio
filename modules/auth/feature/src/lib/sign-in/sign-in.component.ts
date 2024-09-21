import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from '@portfolio/auth-ui';

@Component({
  selector: 'lib-sign-in',
  standalone: true,
  imports: [CommonModule, SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {}
