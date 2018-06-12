import { Injectable } from '@angular/core';
import { User } from './person';
import { Response } from './response';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registerUrl = 'http://localhost:8080/register';
  private loginUrl = 'http://localhost:8080/login';
  constructor(private http: HttpClient) { }
  public createUser(user: User ): Observable<Response> {
    return this.http.post<Response>(this.registerUrl, user);
  }
  public login(user: User ): Observable<Response> {
    return this.http.post<Response>(this.loginUrl, user);
  }
}