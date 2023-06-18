import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  saveUser(data: any) {
    return this.http.post<any>("http://localhost:3000/userList/", data)
  }

  getUser(){
    return this.http.get<any>("http://localhost:3000/userList/");
  }

  getDataById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/userList/${id}`);
  }

  deleteUser(id: number){
    return this.http.delete<any>("http://localhost:3000/userList/"+id)
  }

  updateUser(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/userList/"+id, data);
  }
}
