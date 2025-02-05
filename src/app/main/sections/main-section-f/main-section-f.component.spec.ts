import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionFComponent } from './main-section-f.component';

describe('MainSectionFComponent', () => {
  let component: MainSectionFComponent;
  let fixture: ComponentFixture<MainSectionFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
