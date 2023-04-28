import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaDetailsComponent } from './captcha-details.component';

describe('CaptchaDetailsComponent', () => {
  let component: CaptchaDetailsComponent;
  let fixture: ComponentFixture<CaptchaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptchaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
