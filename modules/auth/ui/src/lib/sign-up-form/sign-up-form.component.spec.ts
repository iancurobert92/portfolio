import { MockBuilder, MockRender } from 'ng-mocks';
import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
  beforeEach(async () => {
    return MockBuilder(SignUpFormComponent);
  });

  it('should create', () => {
    const fixture = MockRender(SignUpFormComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });
});
