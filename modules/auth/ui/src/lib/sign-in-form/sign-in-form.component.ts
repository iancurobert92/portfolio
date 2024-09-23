import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-sign-in-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
})
export class SignInFormComponent {
  @Input() signUpLink?: string | string[];
  @Output() formSubmit = new EventEmitter<{
    email: string;
    password: string;
  }>();

  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.form.valid) {
      return this.form.markAllAsTouched();
    }

    this.formSubmit.emit(this.form.getRawValue());
  }
}
