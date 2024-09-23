import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-auth-feature',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-feature.component.html',
  styleUrl: './auth-feature.component.scss',
})
export class AuthFeatureComponent {}
