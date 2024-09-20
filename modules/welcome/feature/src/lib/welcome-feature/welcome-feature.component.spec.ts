import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeFeatureComponent } from './welcome-feature.component';
import { provideHttpClient } from '@angular/common/http';

describe('WelcomeFeatureComponent', () => {
  let component: WelcomeFeatureComponent;
  let fixture: ComponentFixture<WelcomeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeFeatureComponent],
      providers: [provideHttpClient(), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
