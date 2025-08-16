import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventComp } from './from-event-comp';

describe('FromEventComp', () => {
  let component: FromEventComp;
  let fixture: ComponentFixture<FromEventComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromEventComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEventComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
