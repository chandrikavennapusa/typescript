import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendecelistComponent } from './attendecelist.component';

describe('AttendecelistComponent', () => {
  let component: AttendecelistComponent;
  let fixture: ComponentFixture<AttendecelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendecelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendecelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
