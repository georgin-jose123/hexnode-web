import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionEComponent } from './main-section-e.component';

describe('MainSectionEComponent', () => {
  let component: MainSectionEComponent;
  let fixture: ComponentFixture<MainSectionEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
