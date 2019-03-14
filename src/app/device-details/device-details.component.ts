import { Component, OnInit } from '@angular/core';
import { DevicesServiceService} from '../devices-service.service';
import {Device} from '../device';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device = new Device();
  loading = true;

  constructor(private deviceService: DevicesServiceService,
              private messageService: MessageService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDevice();
  }

  getDevice(): void {
    const macAddress: string = this.route.snapshot.paramMap.get('id');
    this.messageService.add(`DeviceDetailService: fetched id=${macAddress}`);

    this.deviceService.getDevice(macAddress)
      .subscribe(value => {
        this.device = value;
        this.loading = false;
      });
  }

}
