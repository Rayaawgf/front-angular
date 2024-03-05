import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketComponent } from './list-ticket.component';

describe('ListTicketComponent', () => {
  let component: ListTicketComponent;
  let fixture: ComponentFixture<ListTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTicketComponent]
    });
    fixture = TestBed.createComponent(ListTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
