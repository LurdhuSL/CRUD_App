import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http: HttpClient) { }

  api = "http://localhost:3000/data/";

  get(){
    return this.http.get(this.api)
  }

  post(data: any){
    return this.http.post(this.api, data)
  }

  getId(id: number){
    return this.http.get(this.api+id)
  }

  update(id: number, data: any){
    return this.http.put(this.api+id, data)
  }

  delete(id: number){
    return this.http.delete(this.api+id)
  }
}
