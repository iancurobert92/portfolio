import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ProfileCardComponent,
  SocialLinksComponent,
} from '@portfolio/welcome-ui';

@Component({
  selector: 'lib-welcome-feature',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent, SocialLinksComponent],
  templateUrl: './welcome-feature.component.html',
  styleUrl: './welcome-feature.component.scss',
})
export class WelcomeFeatureComponent {}
