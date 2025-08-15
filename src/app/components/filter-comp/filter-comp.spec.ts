import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComp } from './filter-comp';

describe('FilterComp', () => {
  let component: FilterComp;
  let fixture: ComponentFixture<FilterComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
