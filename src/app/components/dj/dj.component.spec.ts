import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DJComponent } from './dj.component';

describe('DJComponent', () => {
  let component: DJComponent;
  let fixture: ComponentFixture<DJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
