import { Injectable } from '@angular/core';
import { Device} from './device';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {ErrorHandlerService} from './error-handler.service';

const API_URL = '/device-api/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesServiceService {


  constructor(private http: HttpClient,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) {
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(API_URL)
      .pipe(
        catchError(this.errorHandler.handleError('getDevices', []))
      );
    // return of(this.devices);
  }

  getDevice(macAddress: string): Observable<Device> {
    return this.http.get<Device>(`${API_URL}/${macAddress}`)
      .pipe(
        catchError(this.errorHandler.handleError('getDevice', null))
      );
  }


}
