import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomobservablesComponent } from './customobservables.component';

describe('CustomobservablesComponent', () => {
  let component: CustomobservablesComponent;
  let fixture: ComponentFixture<CustomobservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomobservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomobservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
