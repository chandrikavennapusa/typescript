import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceformComponent } from './attendenceform.component';

describe('AttendenceformComponent', () => {
  let component: AttendenceformComponent;
  let fixture: ComponentFixture<AttendenceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendenceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
