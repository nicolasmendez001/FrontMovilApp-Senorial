import { ModelUser } from './../../../Models/ModelUser';
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

  saveDirection(direction: string, idUser): Observable<any>{
    return this.http.put<any>(`${APP_URL}/saveDirection/${idUser}`, {direction: direction});
  }

  saveUser(user: ModelUser) {
    return this.http.post(`${APP_URL}/user`, user);
  }

  loginUser(user: JSON){
    return this.http.post(`${APP_URL}/loginUser`, user);
  }
}
