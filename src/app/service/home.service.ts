import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


export class HomeService {
    constructor(private http: HttpClient) { }

    public getCategories(): Observable<any> {
        return this.http.get('assets/json/categories.json');
    }
}
