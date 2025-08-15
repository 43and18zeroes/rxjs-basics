import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectComp } from './behaviour-subject-comp';

describe('BehaviourSubjectComp', () => {
  let component: BehaviourSubjectComp;
  let fixture: ComponentFixture<BehaviourSubjectComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubjectComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
