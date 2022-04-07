import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePartnerProfileComponent } from './configure-partner-profile.component';

describe('ConfigurePartnerProfileComponent', () => {
  let component: ConfigurePartnerProfileComponent;
  let fixture: ComponentFixture<ConfigurePartnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePartnerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePartnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
