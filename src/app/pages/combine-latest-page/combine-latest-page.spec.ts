import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestPage } from './combine-latest-page';

describe('CombineLatestPage', () => {
  let component: CombineLatestPage;
  let fixture: ComponentFixture<CombineLatestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
