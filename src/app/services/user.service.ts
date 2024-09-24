import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://gorest.co.in/public/v2/users';
  token = environment.TOKEN;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.url}?access-token=${this.token}`)
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}?access-token=${this.token}`)
  }

}
