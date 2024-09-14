import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-welcome-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-ui.component.html',
  styleUrl: './welcome-ui.component.scss',
})
export class WelcomeUiComponent {}
