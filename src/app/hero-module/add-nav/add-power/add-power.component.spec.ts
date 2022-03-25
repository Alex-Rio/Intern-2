import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPowerComponent } from './add-power.component';

describe('AddPowerComponent', () => {
  let component: AddPowerComponent;
  let fixture: ComponentFixture<AddPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
