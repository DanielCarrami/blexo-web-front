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
    this.URL = 'http://34.72.72.137:8000/auth/';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  //Log in con usuario ya existente
  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    console.log(body)
    return this.http.post(
      this.URL + 'token/login',
      body
    );
  }
  
  //Realizar registro de un nuevo usuario
  registro(username: string,first_name: string, last_name: string, email: string, password: string, re_password: string) {
    const body = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      re_password: re_password
    };
    console.log(body)
    return this.http.post(
      this.URL + 'users/',
      body
    );
  }

  setSession(res) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('id', res.id);
  }

  //Para comprobar que se inicio sesión
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if(!token) return false;
    if(token == "") return false;
    return true;
  }

}
