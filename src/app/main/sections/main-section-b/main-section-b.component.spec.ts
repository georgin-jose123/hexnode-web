import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionBComponent } from './main-section-b.component';

describe('MainSectionBComponent', () => {
  let component: MainSectionBComponent;
  let fixture: ComponentFixture<MainSectionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
