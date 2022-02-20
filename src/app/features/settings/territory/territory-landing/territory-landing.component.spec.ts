import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryLandingComponent } from './territory-landing.component';

describe('TerritoryLandingComponent', () => {
  let component: TerritoryLandingComponent;
  let fixture: ComponentFixture<TerritoryLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerritoryLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
