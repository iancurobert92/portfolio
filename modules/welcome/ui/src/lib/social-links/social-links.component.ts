import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'lib-social-links',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  @Input({ required: true }) icons: IconDefinition[] = [];
}
