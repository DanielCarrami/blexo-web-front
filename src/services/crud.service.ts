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
    this.URL = 'http://localhost:8000/api/';
  }

  get_all(model: Model) {
    const token = this.auth.getToken()
    console.log("Aqui está el token papu ", token)
    let url = this.URL + model + '/';
    return axios.get(url,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Token ' + token
      }
    });
  }

  get_one(model: Model, id: number, params?){
    const token = this.auth.getToken()
    console.log("Aqui está el token papu ", token)
    let url = this.URL + model + '/' + id + '/';
    return axios.get(url, {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Token ' + token
      }
    })
  }

  get_proyectos(){
    const token = this.auth.getToken()
    let url = this.URL + 'proyecto_de_usuarios'  + '/';
    return axios.get(url, {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Token ' + token
      }
    })
  }

  post_one(model: Model, body){
    const token = this.auth.getToken()
    console.log("Aqui está el token papu ", token)
    let url = this.URL + model + '/';
    console.log(body);
    return axios.post(url,body,{
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Token '+ token
      }
    });
  }

  update(model: string, id: any, body: any) {
    const token = this.auth.getToken()
    console.log("Aqui está el token papu ", token)
    console.log(body);
    return axios.put(this.URL + model + "/" + id + "/", body, {headers:{'Content-Type': 'application/json',
    Authorization: 'Token ' + this.auth.getToken()}});
  }

  delete(model: string, id: any) {
    const token = this.auth.getToken()
    console.log("Aqui está el token papu ", token)
    return axios.delete(this.URL + model + "/" + id + "/", {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Token ' + token
    }
    });
  }
}
