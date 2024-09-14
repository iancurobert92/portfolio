import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsFeatureComponent } from './contacts-feature.component';

describe('ContactsFeatureComponent', () => {
  let component: ContactsFeatureComponent;
  let fixture: ComponentFixture<ContactsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
