import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { ModelService } from 'src/Models/ModelService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  loadServices():Observable<any[]>{
    return this.http.get<any[]>(`${APP_URL}/loadService`);
  }

  public getDataService(id:number): Observable<ModelService>{
    return this.http.get<ModelService>(`${APP_URL}/getService/${id}`);
  }
}
