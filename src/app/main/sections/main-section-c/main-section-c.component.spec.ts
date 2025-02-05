import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionCComponent } from './main-section-c.component';

describe('MainSectionCComponent', () => {
  let component: MainSectionCComponent;
  let fixture: ComponentFixture<MainSectionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
