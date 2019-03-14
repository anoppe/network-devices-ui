import { Component, OnInit } from '@angular/core';
import {DhcpEventService} from '../dhcp-event.service';
import {ActivatedRoute} from '@angular/router';
import {DhcpEvent} from '../dhcpEvent';

@Component({
  selector: 'app-dhcp-event',
  templateUrl: './dhcp-event.component.html',
  styleUrls: ['./dhcp-event.component.css']
})
export class DhcpEventComponent implements OnInit {
  dhcpEvents: DhcpEvent[] = [];
  loading = true;

  constructor(private dhcpEventService: DhcpEventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDhcpEvent();
  }

  getDhcpEvent(): void {
    const macAddress = this.route.snapshot.paramMap.get('id');
    this.dhcpEventService.getDhcpEvents(macAddress)
      .subscribe(value => {
        this.dhcpEvents = value;
        this.loading = false;
      });
  }

}
