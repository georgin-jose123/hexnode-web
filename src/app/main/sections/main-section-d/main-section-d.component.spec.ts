import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionDComponent } from './main-section-d.component';

describe('MainSectionDComponent', () => {
  let component: MainSectionDComponent;
  let fixture: ComponentFixture<MainSectionDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
