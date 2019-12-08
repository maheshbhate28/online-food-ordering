import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
export interface User {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}

export class LoginService {
    constructor(private http: HttpClient) { }

    public verifyLoginCredentials(): Observable<any> {
        return this.http.get('assets/json/user.json');
    }
}
