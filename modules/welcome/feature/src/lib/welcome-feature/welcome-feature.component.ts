import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-welcome-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-feature.component.html',
  styleUrl: './welcome-feature.component.scss',
})
export class WelcomeFeatureComponent {}
