// detail-ticket.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../services/ticket-service.service';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css']
})
export class DetailsTicketComponent implements OnInit {
  ticketId!: number; 
  ticketDetails: any;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.ticketId = +id;
        this.getTicketDetails(this.ticketId);
      }
    });
  }

  getTicketDetails(ticketId: number) {
    this.ticketService.getTicketById(ticketId).subscribe((data: any) => {
      this.ticketDetails = data;
    });
  }
}