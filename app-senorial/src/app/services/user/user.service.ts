import { ModelUser } from './../../../Models/ModelUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URL } from 'src/app/constants';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.connect();
   }

  loadDirections(id: number):Observable<any[]>{
    return this.http.get<any[]>(`${APP_URL}/loadDirections/${id}`);
  }

  saveDirection(direction: string, idUser: number): Observable<any>{
    return this.http.put<any>(`${APP_URL}/saveDirection/${idUser}`, {direction: direction});
  }

  saveUser(user: ModelUser) {
    return this.http.post(`${APP_URL}/user`, user);
  }

  loginUser(uid: string){
    return this.http.get(`${APP_URL}/loginUser/${uid}`);
  }

  updateUser(user: ModelUser){
    return this.http.put<any>(`${APP_URL}/user`, user);
  }
}
