import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRegisComponent } from './email-regis.component';

describe('EmailRegisComponent', () => {
  let component: EmailRegisComponent;
  let fixture: ComponentFixture<EmailRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
