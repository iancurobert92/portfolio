import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '@portfolio/auth-ui';

@Component({
  selector: 'lib-sign-up',
  standalone: true,
  imports: [CommonModule, SignUpFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
