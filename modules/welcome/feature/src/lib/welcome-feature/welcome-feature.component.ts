import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  LanguageListComponent,
  ProfileCardComponent,
  SectionComponent,
  SkillListComponent,
  SocialLinksComponent,
} from '@portfolio/welcome-ui';

@Component({
  selector: 'lib-welcome-feature',
  standalone: true,
  imports: [
    CommonModule,
    ProfileCardComponent,
    SocialLinksComponent,
    SkillListComponent,
    SectionComponent,
    LanguageListComponent,
  ],
  templateUrl: './welcome-feature.component.html',
  styleUrl: './welcome-feature.component.scss',
})
export class WelcomeFeatureComponent {
  socialIcons = [faFacebookF, faLinkedinIn, faInstagram, faTwitter];

  constructor(library: FaIconLibrary) {
    this.socialIcons.forEach((icon) => library.addIcons(icon));
  }
}
