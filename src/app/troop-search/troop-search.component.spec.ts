import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopSearchComponent } from './troop-search.component';

describe('TroopSearchComponent', () => {
  let component: TroopSearchComponent;
  let fixture: ComponentFixture<TroopSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroopSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
