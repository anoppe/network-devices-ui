import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { AppRoutingModule } from './app-routing.module';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DhcpEventComponent } from './dhcp-event/dhcp-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailsComponent,
    DhcpEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
