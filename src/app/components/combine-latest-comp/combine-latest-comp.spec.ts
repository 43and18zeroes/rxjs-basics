import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestComp } from './combine-latest-comp';

describe('CombineLatestComp', () => {
  let component: CombineLatestComp;
  let fixture: ComponentFixture<CombineLatestComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
