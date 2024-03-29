import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPointsComponent } from './reward-points.component';

describe('RewardPointsComponent', () => {
  let component: RewardPointsComponent;
  let fixture: ComponentFixture<RewardPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
