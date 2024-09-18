import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from './language.model';

@Component({
  selector: 'lib-language-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.scss',
})
export class LanguageListComponent {
  @Input() data: Language[] = [];
}
