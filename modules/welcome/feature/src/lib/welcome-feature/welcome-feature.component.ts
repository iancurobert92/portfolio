import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Resume, ResumeService } from '@portfolio/welcome-data-access';
import {
  LanguageListComponent,
  ProfileCardComponent,
  SectionComponent,
  SkillListComponent,
  SocialLink,
  SocialLinksComponent,
} from '@portfolio/welcome-ui';
import { Observable } from 'rxjs';

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
    AsyncPipe,
  ],
  templateUrl: './welcome-feature.component.html',
  styleUrl: './welcome-feature.component.scss',
})
export class WelcomeFeatureComponent {
  resume$: Observable<Resume>;

  private resumeService = inject(ResumeService);

  constructor(library: FaIconLibrary) {
    const socialIcons = [faFacebookF, faLinkedinIn, faInstagram, faTwitter];
    socialIcons.forEach((icon) => library.addIcons(icon));
    this.resume$ = this.resumeService.getResume();
  }

  getFullName(resume: Resume) {
    return `${resume.firstName} ${resume.lastName}`;
  }

  getSocialLinks(resume: Resume) {
    const links: SocialLink[] = [];
    if (resume.facebookUrl) {
      links.push({
        icon: faFacebookF,
        url: resume.facebookUrl,
      });
    }

    if (resume.linkedInUrl) {
      links.push({
        icon: faLinkedinIn,
        url: resume.linkedInUrl,
      });
    }

    if (resume.instagramUrl) {
      links.push({
        icon: faInstagram,
        url: resume.instagramUrl,
      });
    }

    if (resume.twitterUrl) {
      links.push({
        icon: faTwitter,
        url: resume.twitterUrl,
      });
    }

    return links;
  }
}
