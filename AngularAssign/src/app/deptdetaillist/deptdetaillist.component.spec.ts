import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptdetaillistComponent } from './deptdetaillist.component';

describe('DeptdetaillistComponent', () => {
  let component: DeptdetaillistComponent;
  let fixture: ComponentFixture<DeptdetaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptdetaillistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptdetaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
