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

  getServicesOfType(id_service: number): Observable<any> {
    return this.http.get<any>(`${APP_URL}/servicesType/${id_service}`);
  }

  public getDataService(id: number): Observable<ModelService> {
    return this.http.get<ModelService>(`${APP_URL}/getService/${id}`);
  }

  getServices(id: number, estado: string) {
    return this.http.get<JSON[]>(`${APP_URL}/serviciosUsuario/${id}/${estado}`);
  }

  saveComment(id_service: number, comment: String) {
    return this.http.put(`${APP_URL}/saveComment`, { id: id_service, comentario: comment });
  }

  /**
   * saveService
   */
  public saveService(service: ModelService): Observable<JSON> {
    //service
    return this.http.post<JSON>(`${APP_URL}/service`, service);
  }

  /**
   * disconect
   */
  public disconect() {
    this.socket.disconnect();
  }
}
