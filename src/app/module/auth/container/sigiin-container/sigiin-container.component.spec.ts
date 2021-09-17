import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigiinContainerComponent } from './sigiin-container.component';

describe('SigiinContainerComponent', () => {
  let component: SigiinContainerComponent;
  let fixture: ComponentFixture<SigiinContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigiinContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigiinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
