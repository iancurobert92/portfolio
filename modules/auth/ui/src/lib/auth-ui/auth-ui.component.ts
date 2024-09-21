import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-auth-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-ui.component.html',
  styleUrl: './auth-ui.component.scss',
})
export class AuthUiComponent {}
