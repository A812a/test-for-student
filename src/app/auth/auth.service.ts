import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  createUser(model:any) {
    return this._httpClient.post('http://localhost:3000/students' , model)
  }

  getUsers(type:any) {
    return this._httpClient.get('http://localhost:3000/'+type)
  }

  login(model:any) {
    return this._httpClient.post('http://localhost:3000/login', model)
  }

  getRole() {
    return this._httpClient.get('http://localhost:3000/login/1')
  }


}
