import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureCommissionPolicyComponent } from './configure-commission-policy.component';

describe('ConfigureCommissionPolicyComponent', () => {
  let component: ConfigureCommissionPolicyComponent;
  let fixture: ComponentFixture<ConfigureCommissionPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureCommissionPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureCommissionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
