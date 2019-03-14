import { Injectable } from '@angular/core';
import { DhcpEvent} from './dhcpEvent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {ErrorHandlerService} from './error-handler.service';

const API_URL = '/device-api/events';


@Injectable({
  providedIn: 'root'
})
export class DhcpEventService {

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService) {

  }

  public getDhcpEvents(macAddress: string): Observable<DhcpEvent[]> {
    return this.http.get<DhcpEvent[]>(`${API_URL}/?deviceId=${macAddress}`)
      .pipe(
        catchError(this.errorHandler.handleError('getDhcpEVents', []))
      );
  }
}
