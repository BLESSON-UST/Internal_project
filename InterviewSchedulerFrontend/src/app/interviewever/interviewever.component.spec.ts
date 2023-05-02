import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervieweverComponent } from './interviewever.component';

describe('IntervieweverComponent', () => {
  let component: IntervieweverComponent;
  let fixture: ComponentFixture<IntervieweverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervieweverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervieweverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
