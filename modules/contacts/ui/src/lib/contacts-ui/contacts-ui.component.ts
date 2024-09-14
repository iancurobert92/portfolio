import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-contacts-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts-ui.component.html',
  styleUrl: './contacts-ui.component.scss',
})
export class ContactsUiComponent {}
