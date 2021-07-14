import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyFormComponent } from './monkey-form.component';

describe('MonkeyFormComponent', () => {
  let component: MonkeyFormComponent;
  let fixture: ComponentFixture<MonkeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonkeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
