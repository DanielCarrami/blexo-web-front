import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8000/auth/';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'
    });
    /*
    console.log(this.headers);
    if(this.isLoggedIn()){
      this.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Token f86f879e56e96c62831ba240859c5a7a0f0bac5a'
      });
    }else{
      this.headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    } */
    
  }

  //Log in con usuario ya existente
  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    console.log(body)
    return axios.post(
      this.URL + 'token/login/',
      body
    );
  }

  logout(){
    return this.http.post(
      this.URL + 'token/logout/', null, {
        headers: this.headers
      }
    );
  }

  //Realizar registro de un nuevo usuario
  registro(username: string,first_name: string, last_name: string, email: string, password: string, re_password: string) {
    const body = {
      username: first_name + last_name,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      re_password: re_password
    };
    console.log(body)
    return axios.post(
      this.URL + 'users/',
      body
    );
  }

  setSession(res) {
    localStorage.setItem('token', res.auth_token);
  }

  //Para comprobar que se inicio sesión
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if(!token) return false;
    if(token == "") return false;
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
