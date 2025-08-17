import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectPage } from './behaviour-subject-page';

describe('BehaviourSubjectPage', () => {
  let component: BehaviourSubjectPage;
  let fixture: ComponentFixture<BehaviourSubjectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
