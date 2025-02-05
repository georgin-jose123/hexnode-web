import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionGComponent } from './main-section-g.component';

describe('MainSectionGComponent', () => {
  let component: MainSectionGComponent;
  let fixture: ComponentFixture<MainSectionGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
