import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyFormPageComponent } from './monkey-form-page.component';

describe('MonkeyFormPageComponent', () => {
  let component: MonkeyFormPageComponent;
  let fixture: ComponentFixture<MonkeyFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonkeyFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
