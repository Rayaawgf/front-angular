import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlightComponent } from './list-flight.component';

describe('ListFlightComponent', () => {
  let component: ListFlightComponent;
  let fixture: ComponentFixture<ListFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFlightComponent]
    });
    fixture = TestBed.createComponent(ListFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
