import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideOptionsComponent } from './left-side-options.component';

describe('LeftSideOptionsComponent', () => {
  let component: LeftSideOptionsComponent;
  let fixture: ComponentFixture<LeftSideOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
