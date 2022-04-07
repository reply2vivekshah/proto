import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureCommissionPlanComponent } from './configure-commission-plan.component';

describe('ConfigureCommissionPlanComponent', () => {
  let component: ConfigureCommissionPlanComponent;
  let fixture: ComponentFixture<ConfigureCommissionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureCommissionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureCommissionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
