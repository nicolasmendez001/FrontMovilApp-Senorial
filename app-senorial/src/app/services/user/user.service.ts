import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URL } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadDirections(id: number):Observable<any[]>{
    return this.http.get<any[]>(`${APP_URL}/loadDirections/${id}`);
  }

  saveDirection(direction: any): Observable<any>{
    return this.http.post<any>(`${APP_URL}/saveDirection`, direction);
  }
}
