import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComp } from './map-comp';

describe('MapComp', () => {
  let component: MapComp;
  let fixture: ComponentFixture<MapComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
