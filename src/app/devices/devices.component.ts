import { Component, OnInit } from '@angular/core';
import {Device} from '../device';
import { DevicesServiceService } from '../devices-service.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: Device[];
  loading = true;

  constructor(private devicesServiceService: DevicesServiceService) { }

  ngOnInit() {
    this.getDevices();
  }

  getDevices(): void {
    this.devicesServiceService.getDevices()
      .subscribe(devices => {
        this.devices = devices;
        this.loading = false;
      } );
  }
}
