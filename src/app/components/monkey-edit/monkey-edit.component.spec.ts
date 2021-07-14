import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyEditComponent } from './monkey-edit.component';

describe('MonkeyEditComponent', () => {
  let component: MonkeyEditComponent;
  let fixture: ComponentFixture<MonkeyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonkeyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
