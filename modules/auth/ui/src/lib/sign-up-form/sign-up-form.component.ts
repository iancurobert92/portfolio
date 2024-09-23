import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-sign-up-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  @Input() signInLink?: string | string[];
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
