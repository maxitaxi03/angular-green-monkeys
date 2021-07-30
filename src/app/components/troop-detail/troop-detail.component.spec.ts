import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopDetailComponent } from './troop-detail.component';

describe('TroopDetailComponent', () => {
  let component: TroopDetailComponent;
  let fixture: ComponentFixture<TroopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroopDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
