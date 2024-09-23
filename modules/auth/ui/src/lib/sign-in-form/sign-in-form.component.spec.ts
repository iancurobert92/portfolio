import { MockBuilder, MockRender } from 'ng-mocks';
import { SignInFormComponent } from './sign-in-form.component';

describe('SignInFormComponent', () => {
  beforeEach(async () => {
    return MockBuilder(SignInFormComponent);
  });

  it('should create', () => {
    const fixture = MockRender(SignInFormComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });
});
