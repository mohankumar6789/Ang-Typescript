import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassextendsComponent } from './classextends.component';

describe('ClassextendsComponent', () => {
  let component: ClassextendsComponent;
  let fixture: ComponentFixture<ClassextendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassextendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassextendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
