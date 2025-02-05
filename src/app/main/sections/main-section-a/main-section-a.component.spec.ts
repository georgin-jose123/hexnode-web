import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionAComponent } from './main-section-a.component';

describe('MainSectionAComponent', () => {
  let component: MainSectionAComponent;
  let fixture: ComponentFixture<MainSectionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
