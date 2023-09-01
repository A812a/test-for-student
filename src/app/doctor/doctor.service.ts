import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _httpClient:HttpClient) { }


  createSubjects(model:any) {
    return this._httpClient.post('http://localhost:3000/subjects' , model)
  }

  getAllSubjects() {
    return this._httpClient.get('http://localhost:3000/subjects')
  }

  updataSubjects(model:any ,id:any) {
    return this._httpClient.put('http://localhost:3000/subjects/'+id, model)
  }

  deleteSubjects(id:any) {
    return this._httpClient.delete('http://localhost:3000/subjects/'+id)
  }

  getSubject(id:any) {
    return this._httpClient.get('http://localhost:3000/subjects/'+id)
  }

}
