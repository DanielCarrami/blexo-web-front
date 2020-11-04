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
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'
    });
    /*
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
    */

  }

  get_all(model: Model) {
    let url = this.URL + model + '/';
    console.log(this.headers);
    return axios.get(url,{headers:{'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'}});
  }

  get_one(model: Model, id: number, params?){
    let url = this.URL + model + '/' + id + '/';
    return axios.get(url, {headers:{'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'}})
  }

  post_one(model: Model, body){
    let url = this.URL + model + '/';
    console.log(body);
    return axios.post(url,body,{headers:{'Content-Type': 'application/json',
    Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'}});
  }

  update(model: string, id: any, body: any) {
    console.log(body);
    return this.http.put(this.URL + model + "/" + id + "/", body, {headers:{'Content-Type': 'application/json',
    Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'}});
  }

  delete(model: string, id: any) {
    return this.http.delete(this.URL + model + "/" + id + "/", {
      headers: {'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'}
    });
  }
}
