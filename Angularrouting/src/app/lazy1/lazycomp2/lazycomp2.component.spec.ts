import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycomp2Component } from './lazycomp2.component';

describe('Lazycomp2Component', () => {
  let component: Lazycomp2Component;
  let fixture: ComponentFixture<Lazycomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazycomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lazycomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
