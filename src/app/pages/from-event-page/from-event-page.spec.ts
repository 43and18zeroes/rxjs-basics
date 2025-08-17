import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventPage } from './from-event-page';

describe('FromEventPage', () => {
  let component: FromEventPage;
  let fixture: ComponentFixture<FromEventPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromEventPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
