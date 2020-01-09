import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { ModelService } from 'src/Models/ModelService';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.connect();
  }

  loadServices(): Observable<any[]> {
    return this.http.get<any[]>(`${APP_URL}/tipoServicio`);
  }

  public getDataService(id: number): Observable<ModelService> {
    return this.http.get<ModelService>(`${APP_URL}/getService/${id}`);
  }

  public loadRealizados(): Observable<JSON[]> {
    return this.http.get<JSON[]>(`${APP_URL}/realizados`);
  }

  public loadPendientes(): Observable<JSON[]> {
    return this.http.get<JSON[]>(`${APP_URL}/pendientes`);
  }

  saveComment(id_service: any, comment: String) {
    this.http.post(`${APP_URL}/saveCommente`, {id: id_service, comment: comment});
  }

  /**
   * disconect
   */
  public disconect() {
    this.socket.disconnect();
  }
}
