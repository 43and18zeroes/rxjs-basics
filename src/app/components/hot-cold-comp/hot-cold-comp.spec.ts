import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdComp } from './hot-cold-comp';

describe('HotColdComp', () => {
  let component: HotColdComp;
  let fixture: ComponentFixture<HotColdComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotColdComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotColdComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
