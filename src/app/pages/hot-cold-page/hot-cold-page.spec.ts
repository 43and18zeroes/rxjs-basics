import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdPage } from './hot-cold-page';

describe('HotColdPage', () => {
  let component: HotColdPage;
  let fixture: ComponentFixture<HotColdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotColdPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotColdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
