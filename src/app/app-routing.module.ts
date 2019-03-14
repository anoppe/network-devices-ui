import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {DeviceDetailsComponent} from './device-details/device-details.component';
import {DevicesComponent} from './devices/devices.component';


const routes: Route[] = [
  { path: 'devices', component: DevicesComponent},
  { path: 'device/:id', component: DeviceDetailsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
