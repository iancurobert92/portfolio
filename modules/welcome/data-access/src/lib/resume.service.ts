import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from './resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  http = inject(HttpClient);

  getResume(): Observable<Resume> {
    return this.http.get<Resume>('data/resume.json');
  }
}
