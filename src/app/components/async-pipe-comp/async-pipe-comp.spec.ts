import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeComp } from './async-pipe-comp';

describe('AsyncPipeComp', () => {
  let component: AsyncPipeComp;
  let fixture: ComponentFixture<AsyncPipeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipeComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
