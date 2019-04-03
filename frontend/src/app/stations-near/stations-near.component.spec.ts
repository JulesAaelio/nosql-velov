import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsNearComponent } from './stations-near.component';

describe('StationsNearComponent', () => {
  let component: StationsNearComponent;
  let fixture: ComponentFixture<StationsNearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsNearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsNearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
