import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigininComponent } from './siginin.component';

describe('SigininComponent', () => {
  let component: SigininComponent;
  let fixture: ComponentFixture<SigininComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigininComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigininComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
