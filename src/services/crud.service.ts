import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';
import { AuthService } from './auth.service';

export enum Model{
  PROYECTO = 'proyectos',
  SESION = 'sesiones',
  EXPERIMENTOS = 'experimentos'
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  URL: string;
  headers: HttpHeaders;

  constructor(private auth: AuthService, private http: HttpClient) {
    this.URL = 'http://34.72.72.137:8000/api/';
    if(this.auth.isLoggedIn()){
      this.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Token ' + this.auth.getToken()
      });
    }else{
      this.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    }
    
    
  }

  get_all(model: Model) {
    let url = this.URL + model + '/';
    return axios.get(url);
  }

  get_one(model: Model, id: number, params?){
    let url = this.URL + model + '/' + id + '/';
    return axios.get(url)
  }

  post_one(model: Model, body){
    let url = this.URL + model + '/';
    return axios.post(url,body);
  }

  update(model: string, id: any, body: any) {
    return this.http.put(this.URL + model + "/" + id + "/", body, {
      headers: this.headers
    });
  }

  delete(model: string, id: any) {
    return this.http.delete(this.URL + model + "/" + id + "/", {
      headers: this.headers
    });
  }
}