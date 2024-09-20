import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume.service';
import { provideHttpClient } from '@angular/common/http';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClient()],
    });
    service = TestBed.inject(ResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
