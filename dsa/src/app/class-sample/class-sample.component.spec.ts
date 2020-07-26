import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSampleComponent } from './class-sample.component';

describe('ClassSampleComponent', () => {
  let component: ClassSampleComponent;
  let fixture: ComponentFixture<ClassSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
