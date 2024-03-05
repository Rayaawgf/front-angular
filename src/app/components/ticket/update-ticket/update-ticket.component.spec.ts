import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketComponent } from './update-ticket.component';

describe('UpdateTicketComponent', () => {
  let component: UpdateTicketComponent;
  let fixture: ComponentFixture<UpdateTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTicketComponent]
    });
    fixture = TestBed.createComponent(UpdateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
