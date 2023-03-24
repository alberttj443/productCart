import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlingpageComponent } from './landlingpage.component';

describe('LandlingpageComponent', () => {
  let component: LandlingpageComponent;
  let fixture: ComponentFixture<LandlingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
